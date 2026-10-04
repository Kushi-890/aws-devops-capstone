const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
    res.json({
        message: "AWS DevOps Capstone API is running",
        status: "success",
        version: "1.0.0"
    });
});

// Health check endpoint
app.get("/api/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");

        res.json({
            status: "healthy",
            service: "backend",
            database: "connected",
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error("Database health check failed:", error);

        res.status(500).json({
            status: "unhealthy",
            service: "backend",
            database: "disconnected"
        });
    }
});

// Get all users
app.get("/api/users", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT id, name, email, created_at FROM users ORDER BY id"
        );

        res.json({
            status: "success",
            count: result.rows.length,
            users: result.rows
        });
    } catch (error) {
        console.error("Error fetching users:", error);

        res.status(500).json({
            status: "error",
            message: "Failed to fetch users"
        });
    }
});

// Add a new user
app.post("/api/users", async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            status: "error",
            message: "Name and email are required"
        });
    }

    try {
        const result = await pool.query(
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email, created_at",
            [name, email]
        );

        res.status(201).json({
            status: "success",
            user: result.rows[0]
        });
    } catch (error) {
        console.error("Error creating user:", error);

        if (error.code === "23505") {
            return res.status(409).json({
                status: "error",
                message: "Email already exists"
            });
        }

        res.status(500).json({
            status: "error",
            message: "Failed to create user"
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});