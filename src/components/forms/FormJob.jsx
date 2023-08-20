import './Forms.css';
import { useState } from 'react';

const FormJob = ({ addJob }) => {
  const defaultJob = {
    company: '',
    position: '',
    description: '',
    startDate: '',
    endDate: '',
  };

  const [job, setJob] = useState(defaultJob);

  function handleInput(e) {
    const { name, value } = e.target;

    setJob({ ...job, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addJob({ ...job, id: Date.now() });
    setJob(defaultJob);
  }

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <input type="text" name="company" placeholder="company" value={job.company} onChange={handleInput} />
      <input type="text" name="position" placeholder="position" value={job.position} onChange={handleInput} />
      <textarea name="description" placeholder="Job description" value={job.description} rows={5} onChange={handleInput} />
      <div className="input-group">
        <input type="text" name="startDate" placeholder="start date" value={job.startDate} onChange={handleInput} />
        <input type="text" name="endDate" placeholder="end date" value={job.endDate} onChange={handleInput} />
      </div>
      {!false ? (
        <button type="submit">add</button>
      ) : (
        <>
          <button type="button" onClick={null}>
            save
          </button>
          <button type="button" onClick={null}>
            cancel
          </button>
          <button type="button" onClick={null}>
            delete
          </button>
        </>
      )}
    </form>
  );
};

export default FormJob;
