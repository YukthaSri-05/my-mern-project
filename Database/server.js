/**
 * server.js
 * ---------------------------------------------
 * Minimal Express server used ONLY to prove that:
 *   1. Environment variables load correctly
 *   2. MongoDB connects successfully
 *   3. Models are registered correctly
 *
 * This is intentionally lightweight since routes/controllers
 * are being built by other teammates — this file exists so the
 * Database Development part can be tested end-to-end on its own.
 * ---------------------------------------------
 */

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const models = require('./models');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Simple health-check route
app.get('/', (req, res) => {
  res.json({
    message: 'Darshan Ticket Booking App - Database module is running ✅',
    modelsRegistered: Object.keys(models),
  });
});

// Simple route to confirm each collection is reachable
app.get('/api/health/db', async (req, res) => {
  try {
    const counts = {
      users: await models.User.countDocuments(),
      temples: await models.Temple.countDocuments(),
      darshanSlots: await models.DarshanSlot.countDocuments(),
      transports: await models.Transport.countDocuments(),
      bookings: await models.Booking.countDocuments(),
      payments: await models.Payment.countDocuments(),
    };
    res.json({ status: 'ok', counts });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
