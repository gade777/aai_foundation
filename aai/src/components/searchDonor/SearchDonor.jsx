import React, { useState, useEffect, useRef } from "react";
import "./searchdonor.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SearchDonor = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [donorType, setDonorType] = useState("");
  const [address, setAddress] = useState("");
  const [pan, setPan] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeTab, setActiveTab] = useState("search");
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const dropdownRef = useRef(null); // Ref for the dropdown menu

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleDonorTypeChange = (e) => {
    setDonorType(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePanChange = (e) => {
    setPan(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  const handleSearch = () => {
    // Mock search functionality, replace with actual implementation
    const results = [
      {
        SI: 1,
        Date: "2024-05-10",
        Name: "John Doe",
        Mobile: "1234567890",
        City: "Example City",
        Zip: "12345",
        Type: "Individual",
      },
      {
        SI: 2,
        Date: "2024-05-10",
        Name: "Jane Smith",
        Mobile: "9876543210",
        City: "Sample City",
        Zip: "54321",
        Type: "Corporate",
      },
      // Add more results as needed
    ];
    setSearchResults(results);
  };

  useEffect(() => {
    // Call handleSearch when component mounts
    handleSearch();
  }, []); // Empty dependency array ensures it only runs once

  const toggleDropdown = (index) => {
    setDropdownIndex(index === dropdownIndex ? null : index);
  };

  // Function to close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="search-donor-container">
      <h1  style={{color: "var(--side-text-color)"}}>Search Donor</h1>
      <div className="tabs">
        <button
          className={activeTab === "search" ? "active" : ""}
          onClick={() => setActiveTab("search")}
        >
          Search
        </button>
        <button
          className={activeTab === "list" ? "active" : ""}
          onClick={() => setActiveTab("list")}
        >
          List
        </button>
      </div>
      {activeTab === "search" && (
        <div className="column">
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="donorType">Donor Type:</label>
            <select
              id="donorType"
              value={donorType}
              onChange={handleDonorTypeChange}
            >
              <option value="">Select Donor Type</option>
              <option value="Individual">Individual</option>
              <option value="Corporate">Corporate</option>
              <option value="Institute">Institute</option>
              <option value="NGO">NGO</option>
              <option value="Group">Group</option>
              <option value="Profession">Profession</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="profession">Profession:</label>
            <input
              type="text"
              id="profession"
              value={profession}
              onChange={handleProfessionChange}
            />
          </div>
          <div className="column">
            <div className="input-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="pan">PAN:</label>
              <input
                type="text"
                id="pan"
                value={pan}
                onChange={handlePanChange}
              />
            </div>
            <div className="input-group">
              <label>Date Range:</label>
              <div className="date-picker">
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => handleStartDateChange(e.target.value)}
                />
                <span>-</span>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => handleEndDateChange(e.target.value)}
                />
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      )}
      {activeTab === "list" && (
        <div className="column">
          <div className="result-table">
            <table>
              <thead>
                <tr>
                  <th>SI</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>City</th>
                  <th>Zip</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.SI}</td>
                    <td>{result.Date}</td>
                    <td>{result.Name}</td>
                    <td>{result.Mobile}</td>
                    <td>{result.City}</td>
                    <td>{result.Zip}</td>
                    <td>{result.Type}</td>
                    <td>
                      <div className="dropdown" ref={dropdownRef}>
                        <button
                          className="dropbtn"
                          onClick={() => toggleDropdown(index)}
                        >
                          &#8942;
                        </button>
                        {dropdownIndex === index && (
                          <div className="action-dropdown-menu">
                            <ul className="dropdown-menu-list">
                            <li className="dropdown-menu-item">
                                <a href="#">View</a>
                              </li>
                              <li className="dropdown-menu-item">
                                <a href="#">Edit</a>
                              </li>
                              <li className="dropdown-menu-item">
                                <a href="#">Delete</a>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDonor;
