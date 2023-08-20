import './Forms.css';

const FormJob = ({ job, active, setJob, addJob, setToggle, handleSaveJob }) => {
  function handleInput(e) {
    const { name, value } = e.target;

    setJob({ ...job, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addJob({ ...job, id: Date.now() });
    setJob({
      company: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
    });
    setToggle(false);
  }
  function onSave() {
    handleSaveJob(job, active);
    setToggle(false);
    setJob({
      company: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
    });
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
      {!active ? (
        <button type="submit">add</button>
      ) : (
        <>
          <button type="button" onClick={onSave}>
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
