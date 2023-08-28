const EduSection = ({ title, list }) => {
  return (
    list.length > 0 && (
      <div className="content-container" id="edu">
        <h2 className="title">{title}</h2>
        {list.map((item) => (
          <div key={item.id} className="content-card">
            <h3>{item.school}</h3>
            <p className="muted">
              {item.startDate} - {item.endDate}
            </p>
            <p>{item.degree}</p>
          </div>
        ))}
      </div>
    )
  );
};

export default EduSection;
