import FormJob from './forms/FormJob';
import { useState } from 'react';

const JobList = ({ addJob, jobList, handleSaveJob, handleDeleteJob }) => {
  const defaultJob = {
    company: '',
    position: '',
    description: '',
    startDate: '',
    endDate: '',
  };
  const [job, setJob] = useState(defaultJob);
  const [toggle, setToggle] = useState(true);
  const [activeJob, setActiveJob] = useState(null);

  function EditJob(obj) {
    setActiveJob(obj);
    setJob(obj);
    setToggle(!toggle);
  }
  function handleToggle() {
    setToggle(!toggle);
    setActiveJob(null);
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Experience</h2>
        <button onClick={() => handleToggle()}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      {toggle && (
        <FormJob
          job={job}
          active={activeJob}
          setJob={setJob}
          addJob={addJob}
          setToggle={setToggle}
          handleSaveJob={handleSaveJob}
          handleDeleteJob={handleDeleteJob}
        />
      )}
      {!toggle && (
        <div>
          {jobList.map((item) => (
            <div className="sidebar-card" key={item.id}>
              <p>{item.company}</p>
              <button onClick={() => EditJob(item)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
