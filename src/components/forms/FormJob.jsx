import ButtonGroup from '../ButtonGroup';

const FormJob = ({ job, active, setJob, addJob, setToggle, handleSaveJob, handleDeleteJob }) => {
  function handleInput(e) {
    const { name, value } = e.target;

    setJob({ ...job, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addJob('job', { ...job, id: Date.now() });
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
    handleSaveJob('job', job, active);
    setToggle(false);
    setJob({
      company: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
    });
  }
  function onDelete() {
    handleDeleteJob('job', job, active);
    setToggle(false);
    setJob({
      company: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
    });
  }

  function handleCancel() {
    setJob({
      company: '',
      position: '',
      description: '',
      startDate: '',
      endDate: '',
    });
    setToggle(false);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="company" placeholder="company" value={job.company} onChange={handleInput} required />
      <input type="text" name="position" placeholder="position" value={job.position} onChange={handleInput} required />
      <textarea
        name="description"
        placeholder="Job description"
        value={job.description}
        rows={5}
        onChange={handleInput}
      />
      <div className="input-group">
        <input
          type="text"
          name="startDate"
          placeholder="start date"
          value={job.startDate}
          onChange={handleInput}
          required
        />
        <input type="text" name="endDate" placeholder="end date" value={job.endDate} onChange={handleInput} required />
      </div>
      {!active ? (
        <button className="btn" type="submit">
          add
        </button>
      ) : (
        <ButtonGroup handleSave={onSave} handleCancel={handleCancel} handleDelete={onDelete} />
      )}
    </form>
  );
};

export default FormJob;
