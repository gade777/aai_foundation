import React, { useState, useEffect, useRef } from "react";
import "./searchbucket.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const SearchBucket = () => {
  const [name, setName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeTab, setActiveTab] = useState("search");
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = () => {
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
      <h1 style={{ color: "var(--side-text-color)" }}>Managed Bucket</h1>
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
            <label htmlFor="name">Bucket Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <button onClick={handleSearch}>Search</button>
        </div>
      )}
      {activeTab === "list" && (
        <div className="column">
          <div className="result-table">
            <table>
              <thead>
                <tr>
                  <th>SI</th>
                  <th>Title</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.SI}</td>

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

export default SearchBucket;
