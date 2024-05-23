import React, { useState } from "react";
import "./addemail.css";

const AddEmail = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [heightIncrease, setHeightIncrease] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [abbreviation, setAbbreviation] = useState("");

  const handleSubmit = () => {
    // Logic to handle form submission
    const formData = {
      title,
      subject,
      content,
      heightIncrease,
      fromEmail,
      abbreviation,
    };
    console.log("Form data:", formData);
    // You can submit formData to your backend API here
  };

  return (
    <div className="add-email-container">
      <h2>Add Email</h2>
      <div className="form">
        <div className="input-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>From Email:</label>
          <input
            type="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Abbreviation:</label>
          <input
            type="text"
            value={abbreviation}
            onChange={(e) => setAbbreviation(e.target.value)}
          />
        </div>     
        <div className="input-group">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmail;
