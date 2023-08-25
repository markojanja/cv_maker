import ButtonGroup from '../ButtonGroup';

const FormEducation = ({
  education,
  active,
  setEducation,
  addEducation,
  setToggle,
  handleSaveEducation,
  handleDeleteEducation,
}) => {
  function handleInput(e) {
    const { name, value } = e.target;

    setEducation({ ...education, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addEducation({ ...education, id: Date.now() });
    setEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
    setToggle(false);
  }
  function onSave() {
    handleSaveEducation(education, active);
    setToggle(false);
    setEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
  }
  function onDelete() {
    handleDeleteEducation(active);
    setToggle(false);
    setEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
  }

  function handleCancel() {
    setEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
    setToggle(false);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="school" placeholder="school" value={education.school} onChange={handleInput} required />
      <input type="text" name="degree" placeholder="degree" value={education.degree} onChange={handleInput} required />
      <div className="input-group">
        <input
          type="text"
          name="startDate"
          placeholder="start date"
          value={education.startDate}
          onChange={handleInput}
          required
        />
        <input
          type="text"
          name="endDate"
          placeholder="end date"
          value={education.endDate}
          onChange={handleInput}
          required
        />
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

export default FormEducation;
