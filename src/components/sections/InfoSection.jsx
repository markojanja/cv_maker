import React from 'react';

const InfoSection = ({ personalInfo, color, fontColor }) => {
  return (
    <div className="r-header" style={{ backgroundColor: color, color: fontColor }}>
      <h1>{personalInfo.fullname}</h1>

      <div className="r-info-group">
        {personalInfo.email && (
          <div className="r-info">
            <i className="fa-solid fa-envelope"></i>
            <p style={{ color: fontColor }}>{personalInfo.email}</p>
          </div>
        )}
        {personalInfo.phone && (
          <div className="r-info">
            <i className="fa-solid fa-phone"></i>
            <p style={{ color: fontColor }}>{personalInfo.phone}</p>
          </div>
        )}
        {personalInfo.address && (
          <div className="r-info">
            <i className="fa-solid fa-location-dot"></i>
            <p style={{ color: fontColor }}>{personalInfo.address}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoSection;
