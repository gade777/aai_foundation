import React, { useState, useEffect, useRef } from "react";

const AddStaffList = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const dropdownRef = useRef(null); 
  const staffList = [
    {
      id: 1,
      name: "John Doe",
      username: "pankajp",
      Level: "Manager",
      status: "Sales",
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "pankajp",
      Level: "Developer",
      status: "IT",
    },
    // Add more staff members as needed
  ];

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
    <div className="column">
      <h1  style={{color: "var(--side-text-color)"}}>Pending List</h1>
      <div className="result-table">
        <table>
          <thead>
            <tr>
              <th>SI</th>
              <th>Level</th>
              <th>UserName</th>
              <th>Name</th>
              <th>Status</th>
              {/* <th>Action</th> Added Action header */}
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff, index) => (
              <tr key={staff.id}>
                <td>{staff.id}</td>
                <td>{staff.username}</td>
                <td>{staff.Level}</td>
                <td>{staff.name}</td>
                <td>{staff.status}</td>
                <td>
                  {/* <div className="dropdown" ref={dropdownRef}>
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
                  </div> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddStaffList;
