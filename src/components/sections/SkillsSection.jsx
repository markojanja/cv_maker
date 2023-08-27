import React from 'react';

const SkillsSection = ({ skillList, color, fontColor }) => {
  return (
    <div className="content-container">
      <h2 className="title">Skills</h2>
      <ul className="skill-group">
        {skillList.map((item) => (
          <li key={item.id} style={{ backgroundColor: color, color: fontColor }}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
