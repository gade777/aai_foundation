import React, { useState } from 'react';
import './searchdonation.css';

const SearchDonation = () => {
  const [user, setUser] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [supportType, setSupportType] = useState('');
  const [transactionType, setTransactionType] = useState('');
  const [receiptNumber, setReceiptNumber] = useState('');
  const [bucket, setBucket] = useState('');
  const [cityDistrict, setCityDistrict] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    // Logic to handle search
  };

  const handleExportExcel = () => {
    // Logic to export data to Excel
  };

  return (
    <div className="search-donation-container">
      <h2>Search Donation</h2>
      <div className="form">
        <div className="input-group">
          <label>User:</label>
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Mobile Number:</label>
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Support:</label>
          <select value={supportType} onChange={(e) => setSupportType(e.target.value)}>
            <option value="">Select Support</option>
            <option value="Nutrition">Nutrition</option>
            <option value="Education">Education</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </div>
        <div className="input-group">
          <label>Transaction Type:</label>
          <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
            <option value="">Select Transaction Type</option>
            <option value="Cash">Cash</option>
            <option value="Cheque">Cheque</option>
            <option value="E-transfer">E-transfer</option>
          </select>
        </div>
        <div className="input-group">
          <label>Receipt Number:</label>
          <input type="text" value={receiptNumber} onChange={(e) => setReceiptNumber(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Bucket:</label>
          <select value={bucket} onChange={(e) => setBucket(e.target.value)}>
            <option value="">Select Bucket</option>
            <option value="FCRA donation">FCRA donation</option>
            <option value="Domestic">Domestic</option>
          </select>
        </div>
        <div className="input-group">
          <label>City/District:</label>
          <input type="text" value={cityDistrict} onChange={(e) => setCityDistrict(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Date Range:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <span> to </span>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div className="input-group">
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleExportExcel}>Export Excel</button>
        </div>
      </div>
    </div>
  );
};

export default SearchDonation;
