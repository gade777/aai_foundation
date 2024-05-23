import React from 'react';
import "./addBucket.css";

const AddBucket = () => {
  return (
    <div className="container">
      <h1 className="bucket-title">Add Bucket</h1>
      <div className="input-row">
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter Name" className="name-input" />
        </div>
        <div className="input-container">
          <label htmlFor="details">Details:</label>
          <input type="text" id="details" placeholder="Enter Details" className="details-input" />
        </div>
        <button className="submit-btn">Submit</button>
      </div>
     
    </div>
  );
};

export default AddBucket;
