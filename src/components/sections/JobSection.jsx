const JobSection = ({ title, list }) => {
  return (
    <div className="experience-section">
      <h2 className="title">{title}</h2>
      {list.map((item) => (
        <div key={item.id} className="exp-card">
          <h3>{item.company}</h3>
          <p className="muted">
            {item.startDate} - {item.endDate}
          </p>
          <p>{item.position}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobSection;
