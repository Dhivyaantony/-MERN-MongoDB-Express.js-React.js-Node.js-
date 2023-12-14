// AddCourtForm.js
import React, { useState } from 'react';
import './AddCourtForm.css'; // Import your CSS file
import MainNavBar from './MainNavBar'; // Import your main navbar component

const AddCourtForm = () => {
  const [formData, setFormData] = useState({
    courtName: '',
    sportType: '',
    location: '',
    description: '',
    address: '', // Add address to the form data
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.courtName.trim()) {
      newErrors.courtName = 'Court name is required';
      isValid = false;
    }

    if (!formData.sportType.trim()) {
      newErrors.sportType = 'Sport type is required';
      isValid = false;
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
      isValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required'; // Add address validation
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform your form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <MainNavBar />
      <div className="add-court-form">
        <h2>Add a Court</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courtName">Court Name</label>
            <input
              type="text"
              id="courtName"
              name="courtName"
              value={formData.courtName}
              onChange={handleChange}
            />
            {errors.courtName && <p className="error-message">{errors.courtName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="sportType">Sport Type</label>
            <select
              id="sportType"
              name="sportType"
              value={formData.sportType}
              onChange={handleChange}
            >
              <option value="">Select Sport Type</option>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="tennis">Tennis</option>
              {/* Add more sports types as needed */}
            </select>
            {errors.sportType && <p className="error-message">{errors.sportType}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && <p className="error-message">{errors.location}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && <p className="error-message">{errors.description}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error-message">{errors.address}</p>}
          </div>

          <button type="submit">Add Court</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourtForm;
