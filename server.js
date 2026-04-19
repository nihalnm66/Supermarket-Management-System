const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 8080;
const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/supermarket";

let db;

MongoClient.connect(mongoUri)
  .then(client => {
    db = client.db();
    console.log('✅ MongoDB Connected');
    app.listen(port, () => console.log(`🚀 Server: http://localhost:${port}`));
  })
  .catch(err => console.error('❌ Connection Error:', err));

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// --- 9 MONGODB OPERATIONS ---
app.post('/api/products', async (req, res) => {
    await db.collection('products').insertOne(req.body);
    res.status(201).json({ message: "Added" });
});

app.get('/api/products', async (req, res) => {
    const data = await db.collection('products').find().sort({ name: 1 }).toArray();
    res.json(data);
});

app.post('/api/bills', async (req, res) => {
    const { customerName, customerPhone, items, totalAmount } = req.body;
    try {
        for (let item of items) {
            const product = await db.collection('products').findOne({ name: item.name });
            if (!product || product.stock < item.quantity) {
                return res.status(400).json({ error: `Short stock for ${item.name}` });
            }
        }
        const bill = { customerName, customerPhone, items, totalAmount, date: new Date() }; 
        const result = await db.collection('bills').insertOne(bill);
        for (let item of items) {
            await db.collection('products').updateOne({ name: item.name }, { $inc: { stock: -item.quantity } });
        }
        res.json({ message: "Success", bill: { ...bill, _id: result.insertedId } });
    } catch (err) { res.status(500).json({ error: "Server error" }); }
});

app.get('/api/bills', async (req, res) => {
    const bills = await db.collection('bills').find().sort({ date: -1 }).toArray();
    res.json(bills);
});

app.get('/api/bills/search/:phone', async (req, res) => {
    const history = await db.collection('bills').find({ customerPhone: req.params.phone }).toArray();
    res.json(history);
});

app.delete('/api/products/:id', async (req, res) => {
    await db.collection('products').deleteOne({ _id: new ObjectId(req.params.id) });
    res.json({ message: "Deleted" });
});

app.get('/api/low-stock', async (req, res) => {
    const data = await db.collection('products').find({ stock: { $lt: 10 } }).toArray();
    res.json(data);
});

app.get('/api/revenue', async (req, res) => {
    const result = await db.collection('bills').aggregate([{ $group: { _id: null, total: { $sum: "$totalAmount" } } }]).toArray();
    res.json(result[0] || { total: 0 });
});