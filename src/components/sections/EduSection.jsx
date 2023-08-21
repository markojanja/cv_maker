const EduSection = ({ title, list }) => {
  return (
    <div className="education-section">
      <h2 className="title">{title}</h2>
      <div className="edu-group">
        {list.map((item) => (
          <div key={item.id} className="edu-card">
            <h3>{item.school}</h3>
            <p className="muted">
              {item.startDate} - {item.endDate}
            </p>
            <p>{item.degree}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EduSection;
