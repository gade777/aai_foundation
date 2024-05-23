import React, { useState, useEffect, useRef } from "react";
import "./addvisitor.css";

const AddVisitor = () => {
  const [salutation, setSalutation] = useState("");
  // const [donorType, setDonorType] = useState('');
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [anniversary, setAnniversary] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [profession, setProfession] = useState("");
  const [referral, setReferral] = useState("");
  const [panImage, setPanImage] = useState(null);
  const [folderOpen, setFolderOpen] = useState(false);

  const handleSalutationChange = (e) => {
    setSalutation(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPanImage(file);
  };

  const handleSubmit = () => {
    const formData = {
      salutation,
      firstName,
      middleName,
      lastName,
      dob,
      gender,
      bloodGroup,
      mobile,
      email,
      maritalStatus,
      anniversary,
      pan,
      address,
      district,
      country,
      state,
      city,
      postalCode,
      profession,
      referral,
      panImage,
    };
    console.log("Form data:", formData);
  };

  return (
    <div className="add-donor-container">
      <h2>Add Donor</h2>
      <div className="form">
        <div className="input-group">
          <label>Salutation:</label>
          <select value={salutation} onChange={handleSalutationChange}>
            <option value="">Select Salutation</option>
            <option value="Mr">Mr</option>
            <option value="Miss">Miss</option>
            <option value="Mrs">Mrs</option>
          </select>
        </div>

        <div className="name-input-group">
          <div className="input-group">
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Middle Name:</label>
            <input
              type="text"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Gender:</label>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>
        <div className="input-group">
          <label>Blood Group:</label>
          <input
            type="text"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Mobile:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Marital Status:</label>
          <select
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value="">Select Marital Status</option>
            <option value="Unmarried">Unmarried</option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        {maritalStatus === "Anniversary" && (
          <div className="input-group">
            <label>Anniversary Date:</label>
            <input
              type="date"
              value={anniversary}
              onChange={(e) => setAnniversary(e.target.value)}
            />
          </div>
        )}
        <div className="input-group">
          <label>PAN:</label>
          <input
            type="text"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
          />
        </div>
        <div className="address-input-group">
          <div className="input-group">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>District:</label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
        </div>
        <div className="location-input-group">
          <div className="input-group">
            <label>Country:</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>State:</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <label>Postal Code:</label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Profession:</label>
          <input
            type="text"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Reference By:</label>
          <input
            type="text"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>PAN Image:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="input-group">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddVisitor;
