import React, { useState } from "react";
import "./Addtask.css";

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div id="addtask_container">
      <h1>Add Task</h1>
      <div className="add">
        <div className="task-row">
          <input
            type="file"
            className="file-input"
            style={{ color: "var(--side-text-color)" }}
          />
          <div className="custom-select">
            <div className="select-header" onClick={toggleDropdown}>
              {selectedOption || "Select an option"}
            </div>
            {isOpen && (
              <div className="select-options">
                <div className="option" onClick={() => handleOptionSelect("--Select--")}>--Select--</div>
                <div className="option" onClick={() => handleOptionSelect("FCRA Donation")}>FCRA Donation</div>
                <div className="option" onClick={() => handleOptionSelect("Domestic Donation")}>Domestic Donation</div>
                <div className="option" onClick={() => handleOptionSelect("Phone Pay")}>Phone Pay</div>
                <div className="option" onClick={() => handleOptionSelect("Web")}>Web</div>
                <div className="option" onClick={() => handleOptionSelect("SantoshPay")}>SantoshPay</div>
              </div>
            )}
          </div>
          <button className="import-btn">Import Now</button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
