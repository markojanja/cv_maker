import FormEducation from './forms/FormEducation';

const EducationList = ({ educationList, onChange, onSubmit, education, handleToggle, toggle, setCurrentEducation, handleCancel, itemToEdit, handleSave }) => {
  function toggleAndEdit(obj) {
    handleToggle();
    setCurrentEducation(obj);
  }

  return (
    <div className="education-form-container">
      <div className="education-header">
        <h2>education</h2>
        <button onClick={handleToggle}>+</button>
        {toggle && (
          <FormEducation
            onChange={onChange}
            onSubmit={onSubmit}
            education={education}
            handleCancel={handleCancel}
            itemToEdit={itemToEdit}
            handleSave={handleSave}
          />
        )}
        {!toggle && (
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
