// Import necessary modules
const express = require('express');
const router = express.Router();
const addTimeslotRouter = require('./routes/addTimeSlot');


// Example in-memory data store for courts and timeslots
const courts = {};

// Route to add a timeslot for a specific court
router.post('/api/addTimeslot/:id', (req, res) => {
  const courtId = req.params.id;
  const { timeslot } = req.body;

  // Check if the court exists
  if (!courts[courtId]) {
    return res.status(404).json({ error: 'Court not found' });
  }

  // Add the timeslot to the court
  courts[courtId].timeslots.push(timeslot);

  // Send a success response
  res.json({ success: true, message: 'Timeslot added successfully' });
});

module.exports = router;
