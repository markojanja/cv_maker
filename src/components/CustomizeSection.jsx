import React from 'react';

const CustomizeSection = ({ color, setColor, fontColor, setFontColor }) => {
  return (
    <div className="customize-tab">
      <div className="color-picker">
        <label htmlFor="color-picker">Change resume color</label>
        <input type="color" id="color-picker" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
      <div className="color-picker">
        <label htmlFor="color-picker">Change font color</label>
        <input type="color" id="color-picker" value={fontColor} onChange={(e) => setFontColor(e.target.value)} />
      </div>
    </div>
  );
};

export default CustomizeSection;
