import './Forms.css';

const FormJob = () => {
  return (
    <form className="job-form">
      <input type="text" name="comppany" placeholder="company" value={'Google'} onChange={null} />
      <input type="text" name="position" placeholder="position" value={'react developer'} onChange={null} />
      <textarea name="description" placeholder="Job description" value={'create cool apps'} onChange={null} />
      <div className="input-group">
        <input type="text" name="startDate" placeholder="start date" value={2023} onChange={null} />
        <input type="text" name="endDate" placeholder="end date" value={2024} onChange={null} />
      </div>
      {!false ? (
        <button type="submit">add</button>
      ) : (
        <>
          <button type="button" onClick={handleSave}>
            save
          </button>
          <button type="button" onClick={handleCancel}>
            cancel
          </button>
          <button type="button" onClick={handleDelete}>
            delete
          </button>
        </>
      )}
    </form>
  );
};

export default FormJob;
