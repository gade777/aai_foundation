import React, { useState, useEffect, useRef } from "react";
import "./pendingtask.css";

const PendingTask = () => {
  const [activeTab, setActiveTab] = useState("FCRA"); // Default active tab
  const [donations, setDonations] = useState({
    FCRA: [],
    Domestic: [],
    Cash: [],
    InKind: [],
    Phonepay: [],
    Web: [],
    SantoshPay: [],
  });

  // Sample data for different donation types
  useEffect(() => {
    const sampleData = {
      FCRA: [
        { SI: 1, Description: "Donation for education", RefNo: "REF123", Amount: 1000, BucketType: "FCRA", Date: "2024-05-10" },
        { SI: 2, Description: "Donation for healthcare", RefNo: "REF456", Amount: 1500, BucketType: "FCRA", Date: "2024-05-12" },
      ],
      Domestic: [
        { SI: 1, Description: "Local charity", RefNo: "REF789", Amount: 500, BucketType: "Domestic", Date: "2024-05-15" },
      ],
      Cash: [
        { SI: 1, Description: "Cash donation", RefNo: "REF001", Amount: 200, BucketType: "Cash", Date: "2024-05-18" },
      ],
      InKind: [
        { SI: 1, Description: "In-kind donation", RefNo: "REF002", Amount: "Books", BucketType: "In Kind", Date: "2024-05-20" },
      ],
      Phonepay: [
        { SI: 1, Description: "PhonePe donation", RefNo: "REF003", Amount: 300, BucketType: "PhonePay", Date: "2024-05-22" },
      ],
      Web: [
        { SI: 1, Description: "Web donation", RefNo: "REF004", Amount: 400, BucketType: "Web", Date: "2024-05-25" },
      ],
      SantoshPay: [
        { SI: 1, Description: "SantoshPay donation", RefNo: "REF005", Amount: 700, BucketType: "SantoshPay", Date: "2024-05-28" },
      ],
    };
    setDonations(sampleData);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="pending-task-container">
      <h1 style={{ color: "var(--side-text-color)" }}>Pending Task</h1>
      <div className="tabs">
        <button
          className={activeTab === "FCRA" ? "active" : ""}
          onClick={() => handleTabClick("FCRA")}
        >
          FCRA Donation
        </button>
        <button
          className={activeTab === "Domestic" ? "active" : ""}
          onClick={() => handleTabClick("Domestic")}
        >
          Domestic Donation
        </button>
        <button
          className={activeTab === "Cash" ? "active" : ""}
          onClick={() => handleTabClick("Cash")}
        >
          Cash Donation
        </button>
        <button
          className={activeTab === "InKind" ? "active" : ""}
          onClick={() => handleTabClick("InKind")}
        >
          In Kind Donation
        </button>
        <button
          className={activeTab === "Phonepay" ? "active" : ""}
          onClick={() => handleTabClick("Phonepay")}
        >
          PhonePay Donation
        </button>
        <button
          className={activeTab === "Web" ? "active" : ""}
          onClick={() => handleTabClick("Web")}
        >
          Web Donation
        </button>
        <button
          className={activeTab === "SantoshPay" ? "active" : ""}
          onClick={() => handleTabClick("SantoshPay")}
        >
          SantoshPay Donation
        </button>
      </div>
      <div className="result-table">
        <table>
          <thead>
            <tr>
              <th>SI</th>
              <th>Description</th>
              <th>Reference No</th>
              <th>Amount</th>
              <th>Bucket Type</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {donations[activeTab].map((donation, index) => (
              <tr key={index}>
                <td>{donation.SI}</td>
                <td>{donation.Description}</td>
                <td>{donation.RefNo}</td>
                <td>{donation.Amount}</td>
                <td>{donation.BucketType}</td>
                <td>{donation.Date}</td>
                <td>
                  <div className="dropdown">
                    <button>&#8942;</button>
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingTask;
