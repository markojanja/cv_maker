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
    <div className="education-form-container">
      <div className="education-header">
        <h2>education</h2>
        <button onClick={handleToggle}>+</button>
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
              <div key={index}>
                <p>{item.school}</p>
                <button onClick={() => toggleAndEdit(item)}>edit</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default EducationList;
