# [cite_start]Supermarket Management System [cite: 7]

[cite_start]A modern, web-based platform designed to replace traditional manual ledgers and notebooks with a digital interface for retail management[cite: 23, 24]. [cite_start]This project focuses on efficient data handling and real-time inventory tracking using a NoSQL architecture[cite: 25, 28].

## 🚀 Features
* [cite_start]**Inventory Management**: Securely add new products to the inventory collection[cite: 26, 45].
* [cite_start]**Real-time Search & Filtering**: Quickly locate products or view specific billing records through dedicated search tools[cite: 32, 108].
* [cite_start]**Transaction & Bill History**: Generate itemized digital receipts while maintaining a categorized history of all transactions for administrative review[cite: 118].
* [cite_start]**Record Deletion**: Remove outdated items or clear historical data as necessary[cite: 162].

## 🛠️ Tech Stack
* [cite_start]**Frontend**: HTML, CSS, and JavaScript for a professional, user-friendly interface[cite: 31].
* [cite_start]**Backend**: Node.js and Express.js to handle database operations and API requests[cite: 30].
* [cite_start]**Database**: MongoDB (NoSQL) for flexible and efficient retail data storage[cite: 28, 35].

## 📊 MongoDB Operations Used
[cite_start]The system utilizes 7 core MongoDB operations to handle the dynamic nature of retail data[cite: 35]:
1. [cite_start]**Inventory Retrieval (`find`)**: Pulls live stock data for real-time display[cite: 36].
2. [cite_start]**Product Lookup (`findOne`)**: Identifies specific items to verify details during checkout[cite: 37].
3. [cite_start]**Transaction Storage (`insertOne`)**: Saves finalized customer receipts as permanent records[cite: 39].
4. [cite_start]**Atomic Updates (`updateOne` with `$inc`)**: Automatically decrements stock levels when items are purchased[cite: 40].
5. [cite_start]**Data Cleanup (`deleteOne`)**: Removes outdated or discontinued products[cite: 41].
6. [cite_start]**Historical Sorting (`sort`)**: Organizes the bill history to display the most recent transactions first[cite: 42].
7. [cite_start]**Stock Validation (`$gt`)**: Ensures requested quantities do not exceed available inventory[cite: 43].

## 💻 Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/nihalnm66/Supermarket-Management-System.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```text
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   node server.js
   ```

## 👥 Authors
* [cite_start]**NIHAL N M** - USN: NNM23IS108 [cite: 14, 15]
* [cite_start]**KRITHI U KOTIAN** - USN: NNM23IS088 [cite: 16]
