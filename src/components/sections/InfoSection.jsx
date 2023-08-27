import React from 'react';

const InfoSection = ({ personalInfo, color, fontColor }) => {
  return (
    <div className="r-header" style={{ backgroundColor: color, color: fontColor }}>
      <h1>{personalInfo.fullname}</h1>
      <div className="r-info-group">
        <div className="r-info">
          <i className="fa-solid fa-envelope"></i>
          <p>{personalInfo.email}</p>
        </div>
        <div className="r-info">
          <i className="fa-solid fa-phone"></i>
          <p>{personalInfo.phone}</p>
        </div>
        <div className="r-info">
          <i className="fa-solid fa-location-dot"></i>
          <p>{personalInfo.address}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
