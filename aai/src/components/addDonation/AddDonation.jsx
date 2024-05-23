import React from "react";
import "./adddonation.css";
import { Link } from "react-router-dom";

const AddDonation = () => {
  return (
    <div className="donation_maincontainer">
      <h1  style={{color: "var(--side-text-color)"}}>Add Donation</h1>

      <div className="donation_row">
        <div className="donation_container">
          <h4 htmlFor="name"  style={{color: "var(--side-text-color)"}}>Enter Keyword(Auto Complete)</h4>
          <h5  style={{color: "var(--side-text-color)"}}>(Name,Code or Mobile No.)</h5>
          <input
            type="text"
            id="name"
            placeholder="keyword(Name,Code or Mobile No.)"
            className="name-input"
          />
        </div>
        <div className="donation_left">
          <h4  style={{color: "var(--side-text-color)"}}> OR </h4>
          <button  ><Link to="/addDonor" className="donation_btn_add">Add New Donor</Link></button>
        </div>
      </div>

      <div className="donation_row">
        <div  className="donation_container">
          <h4 htmlFor="name" style={{color: "var(--side-text-color)"}}>Enter Keyword(Search)</h4>
          <h5  style={{color: "var(--side-text-color)"}}>(Name,Code or Mobile No.)</h5>
          <input
            type="text"
            id="name"
            placeholder="keyword(Name,Code or Mobile No.)"
            className="name-input"
            style={{color: "var(--side-text-color)"}}
          />
          <button className="donation_btn"  >Search</button>
        </div>
        <div className="donation_right">
          <h4  style={{color: "var(--side-text-color)"}}> Donor List </h4>
          <h5  style={{color: "var(--side-text-color)"}}>----</h5>
        </div>
      </div>
    </div>
  );
};

export default AddDonation;
