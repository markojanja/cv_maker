const CustomizeSection = ({ color, setColor, fontColor, setFontColor }) => {
  const handleChangeColor = (e) => {
    document.documentElement.style.setProperty('--resume-bg', e.target.value);
    setColor(e.target.value);
  };
  const handleChangeFontColor = (e) => {
    document.documentElement.style.setProperty('--resume-font-clr', e.target.value);
    setFontColor(e.target.value);
  };

  return (
    <div className="customize-tab">
      <div className="color-picker">
        <label htmlFor="color-picker">Change resume color</label>
        <input type="color" id="color-picker" value={color} onChange={handleChangeColor} />
      </div>
      <div className="color-picker">
        <label htmlFor="color-picker">Change font color</label>
        <input type="color" id="color-picker" value={fontColor} onChange={handleChangeFontColor} />
      </div>
    </div>
  );
};

export default CustomizeSection;
