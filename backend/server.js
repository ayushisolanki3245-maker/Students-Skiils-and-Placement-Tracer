require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const skillRoutes = require("./routes/skillRoutes");
const dsaRoutes = require("./routes/dsaRoutes");
const projectRoutes = require('./routes/projectRoutes');
const certificationRoutes = require('./routes/certificationRoutes');
const placementRoutes = require("./routes/placementRoutes");
const profileRoutes = require("./routes/profileRoutes");
const jobRoutes = require("./routes/jobRoutes");
const redinessRoutes = require("./routes/readinessRoutes");

const app = express();

// Middleware to read JSON request bodies
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/skills",skillRoutes);
app.use("/api/dsa", dsaRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/certifications', certificationRoutes);
app.use("/api/placements", placementRoutes);
app.use("/api/profile", profileRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/readiness', redinessRoutes );

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});