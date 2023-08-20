import FormJob from './forms/FormJob';

const JobList = ({ addJob }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Experience</h2>
        <button>+</button>
      </div>
      <FormJob addJob={addJob} />
    </div>
  );
};

export default JobList;
