import React, { useState } from "react";
import "./LocationInput.css";
import locationn from "../../assets/outline-location_on-24px.svg";
import editt from "../../assets/editt.svg";
import clearr from "../../assets/clearr.svg";

const LocationInput = () => {
  const [location, setLocation] = useState("");
  const [editing, setEditing] = useState(false);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setEditing(false);
    }
  };

  const handleClearClick = (event) => {
    event.preventDefault();
    setLocation("");
  };

  return (
    <div className="location-input" onBlur={handleBlur} tabIndex={-1}>
      {editing ? (
        <div className="input-container flex">
          <div className="disp-cont-under flex">
          <img src={locationn} alt="Location Icon" />
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter your location"
            value={location}
            onChange={handleChange}
            autoFocus
          /></div>
          <img src={clearr} alt="Clear Icon" onClick={handleClearClick} />
        </div>
      ) : (
        <div className="display-container flex" onClick={handleEditClick}>
          <div className="disp-cont-under flex">
          <img src={locationn} alt="Location Icon" />
          <span>{location || "Enter your location"}</span></div>
          <img src={editt} alt="Edit Icon" />
        </div>
      )}
    </div>
  );
};

export default LocationInput;
