/**
 * utils/seedData.js
 * ---------------------------------------------
 * Populates the database with sample data so the
 * schemas/models can be quickly tested end-to-end.
 *
 * Run with:  npm run seed
 * ---------------------------------------------
 */

require('dotenv').config();
const connectDB = require('../config/db');
const { User, Temple, DarshanSlot, Transport, Booking, Payment } = require('../models');

const seed = async () => {
  await connectDB();

  try {
    console.log('🌱 Clearing existing data...');
    await Promise.all([
      User.deleteMany(),
      Temple.deleteMany(),
      DarshanSlot.deleteMany(),
      Transport.deleteMany(),
      Booking.deleteMany(),
      Payment.deleteMany(),
    ]);

    console.log('🌱 Creating sample user...');
    const user = await User.create({
      name: 'Lakshmi Priya',
      email: 'lakshmi@example.com',
      phone: '9876543210',
      password: 'password123', // will be auto-hashed
      role: 'devotee',
      address: { city: 'Rajahmundry', state: 'Andhra Pradesh' },
    });

    console.log('🌱 Creating sample temple...');
    const temple = await Temple.create({
      name: 'Sri Kotilingeshwara Swamy Temple',
      deity: 'Lord Shiva',
      description: 'A serene temple offering daily darshan and special poojas.',
      location: { city: 'Rajahmundry', state: 'Andhra Pradesh' },
      poojaTypes: [
        { name: 'General Darshan', price: 0, duration: 10 },
        { name: 'Special Darshan', price: 100, duration: 15 },
      ],
    });

    console.log('🌱 Creating sample darshan slot...');
    const slot = await DarshanSlot.create({
      temple: temple._id,
      date: new Date(Date.now() + 24 * 60 * 60 * 1000), // tomorrow
      startTime: '09:00',
      endTime: '09:15',
      poojaType: 'Special Darshan',
      pricePerTicket: 100,
      totalCapacity: 50,
    });

    console.log('🌱 Creating sample transport (bus)...');
    const transport = await Transport.create({
      type: 'bus',
      operatorName: 'APSRTC',
      transportNumber: 'AP-101',
      source: { name: 'Rajahmundry' },
      destination: { name: 'Vijayawada' },
      departureTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
      arrivalTime: new Date(Date.now() + 5 * 60 * 60 * 1000),
      totalSeats: 40,
      availableSeats: 40,
      price: 250,
    });

    console.log('🌱 Creating sample darshan booking...');
    const booking = await Booking.create({
      user: user._id,
      bookingType: 'darshan',
      darshanSlot: slot._id,
      passengers: [{ name: 'Lakshmi Priya', age: 34, gender: 'female' }],
      numberOfTickets: 1,
      totalAmount: 100,
      bookingStatus: 'pending',
    });

    console.log('🌱 Creating sample payment...');
    const payment = await Payment.create({
      booking: booking._id,
      user: user._id,
      amount: 100,
      method: 'upi',
      transactionId: 'TXN' + Date.now(),
      status: 'success',
    });

    booking.payment = payment._id;
    booking.bookingStatus = 'confirmed';
    await booking.save();

    console.log('✅ Seed data created successfully!');
    console.log({
      user: user.email,
      temple: temple.name,
      slot: slot.bookingReferenceId || slot._id,
      transport: transport.transportNumber,
      booking: booking.bookingReferenceId,
      payment: payment.transactionId,
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seed();
