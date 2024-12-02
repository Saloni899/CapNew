const express = require("express");
const mongoose = require("mongoose");
const serviceRoutes = require("./routes/serviceRoutes");
const requestRoutes = require("./routes/requestRoutes");
const memberRoutes = require("./routes/memberRoutes");

// MongoDB URI and Port - Hardcoded
const MONGO_URI = "mongodb://127.0.0.1:27017/civilloan";  // MongoDB URI
const PORT = 5000;  // Port for the server

// Connect to MongoDB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Connect to the database
connectDB();

// Set up Express app
const app = express();
app.use(express.json());
app.use("/api", serviceRoutes);
app.use("/api", requestRoutes);
app.use("/api", memberRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
