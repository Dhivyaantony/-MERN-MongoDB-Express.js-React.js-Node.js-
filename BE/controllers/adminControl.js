const Court = require('../Model/courtModel');

const addCourtData = async (req, res) => {
  try {
    const { courtName, sportType, location, description, address } = req.body;
    const courtImage = req.file.filename; // Use req.file.path for the file path


    // Create a new court document
    const newCourt = new Court({
      courtName,
      sportType,
      location,
      description,
      address,
      courtImage,
    });

    // Save the court data to MongoDB
    await newCourt.save();

    // Respond with a success message
    res.status(200).json({ message: 'Court data added successfully' });
  } catch (error) {
    console.error('Error:', error);
    // Respond with an error message
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { addCourtData };
