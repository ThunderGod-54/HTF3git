const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan"); // Optional: Logs requests to your console

// 1. Load Environment Variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Middleware
app.use(cors()); // Allows your Vite frontend to communicate with this server
app.use(express.json()); // Essential for handling JSON data from frontend forms/requests
app.use(morgan("dev")); // Logs "GET / 200" style messages for easier debugging

// 3. Sample Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Backend server is healthy and connected!",
    timestamp: new Date().toISOString(),
  });
});

// 4. Global Error Handler (Good practice for clean code)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong on the server!" });
});

// 5. Start Server
app.listen(PORT, () => {
  console.log(`
     Server is screaming live!
     URL: http://localhost:${PORT}
     Mode: ${process.env.NODE_ENV || "development"}
    `);
});
