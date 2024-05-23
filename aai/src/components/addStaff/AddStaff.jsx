import React, { useState } from "react";
import "./addstaff.css";

const AddStaff = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    level: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="staff_main_container">
      <h1 className="bucket-title">Staff Details</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="column">
          <label>
            Name: <span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>
            Username:<span className="required">*</span>
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="column">
          <label>
            Level: <span className="required">*</span>
          </label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            
          >
            <option value="">--Select--</option>
            <option value="Manager">Manager</option>
            <option value="Officer">Officer</option>
          </select>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <label>
            Password: <span className="required">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </form>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddStaff;
