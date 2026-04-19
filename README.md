# Supermarket Management System

A modern, web-based platform designed to replace traditional manual ledgers and notebooks with a digital interface for retail management. This project focuses on efficient data handling and real-time inventory tracking using a NoSQL architecture.

## 🚀 Features
* **Inventory Management**: Securely add new products to the inventory collection.
* **Real-time Search & Filtering**: Quickly locate products or view specific billing records through dedicated search tools.
* **Transaction & Bill History**: Generate itemized digital receipts while maintaining a categorized history of all transactions for administrative review.
* **Record Deletion**: Remove outdated items or clear historical data as necessary.

## 🛠️ Tech Stack
* **Frontend**: HTML, CSS, and JavaScript for a professional, user-friendly interface.
* **Backend**: Node.js and Express.js to handle database operations and API requests.
* **Database**: MongoDB (NoSQL) for flexible and efficient retail data storage.

## 📊 MongoDB Operations Used
The system utilizes 7 core MongoDB operations to handle the dynamic nature of retail data:
1. **Inventory Retrieval (`find`)**: Pulls live stock data for real-time display.
2. **Product Lookup (`findOne`)**: Identifies specific items to verify details during checkout.
3. **Transaction Storage (`insertOne`)**: Saves finalized customer receipts as permanent records.
4. **Atomic Updates (`updateOne` with `$inc`)**: Automatically decrements stock levels when items are purchased.
5. **Data Cleanup (`deleteOne`)**: Removes outdated or discontinued products.
6. **Historical Sorting (`sort`)**: Organizes the bill history to display the most recent transactions first.
7. **Stock Validation (`$gt`)**: Ensures requested quantities do not exceed available inventory.

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
* **NIHAL N M**
* **KRITHI U KOTIAN** 
