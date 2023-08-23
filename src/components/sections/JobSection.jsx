const JobSection = ({ title, list }) => {
  return (
    <div className="experience-section">
      <h2 className="title">{title}</h2>
      {list.map((item) => (
        <div key={item.id} className="exp-card">
          <h3>{item.position}</h3>
          <p style={{ fontWeight: 'bolder' }}>
            {item.company}{' '}
            <span className="muted" style={{ fontSize: '14px' }}>
              {item.startDate} - {item.endDate}
            </span>
          </p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobSection;
