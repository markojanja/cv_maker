import ButtonGroup from '../ButtonGroup';
const FormEducation = ({ onChange, onSubmit, handleCancel, handleDelete, education, activeEducation, handleSave }) => {
  return (
    <form className="edu-form" onSubmit={onSubmit}>
      <input type="text" name="school" placeholder="School/Universty" value={education.school} onChange={onChange} />
      <input type="text" name="degree" placeholder="Degree" value={education.degree} onChange={onChange} />
      <div className="input-group">
        <input type="text" name="startDate" placeholder="start date" value={education.startDate} onChange={onChange} />
        <input type="text" name="endDate" placeholder="end date" value={education.endDate} onChange={onChange} />
      </div>
      {!activeEducation ? (
        <button className="btn" type="submit">
          add
        </button>
      ) : (
        <ButtonGroup handleSave={handleSave} handleCancel={handleCancel} handleDelete={handleDelete} />
      )}
    </form>
  );
};

export default FormEducation;
