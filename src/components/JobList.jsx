import FormJob from './forms/FormJob';

const JobList = ({ job, setJob, jobList, setJobList, activeJob, setActiveJob }) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Experience</h2>
        <button>+</button>
      </div>
      <FormJob />
    </div>
  );
};

export default JobList;
