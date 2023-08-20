import FormEducation from './forms/FormEducation';

const EducationList = ({
  educationList,
  setEducation,
  education,
  onSubmit,
  toggleForm,
  setToggleForm,
  activeEducation,
  setCurrentEducation,
  handleSave,
  handleDelete,
  handleCancel,
}) => {
  function handleToggle() {
    setToggleForm(!toggleForm);
  }

  function toggleAndEdit(obj) {
    handleToggle();
    setCurrentEducation(obj);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEducation({ ...education, id: Math.random() * 10000, [name]: value });
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>education</h2>
        <button onClick={handleToggle}>+</button>
      </div>
      {toggleForm && (
        <FormEducation
          onChange={handleChange}
          onSubmit={onSubmit}
          education={education}
          handleDelete={handleDelete}
          activeEducation={activeEducation}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      )}
      {!toggleForm && (
        <div>
          {educationList.map((item, index) => (
            <div className="sidebar-card" key={index}>
              <p>{item.school}</p>
              <button onClick={() => toggleAndEdit(item)}>edit</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default EducationList;
