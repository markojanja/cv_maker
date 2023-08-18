const FormEducation = ({ onChange, onSubmit, handleCancel, education, itemToEdit, handleSave }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="school" placeholder="School/Universty" value={education.school} onChange={onChange} />
      <input type="text" name="degree" placeholder="Degree" value={education.degree} onChange={onChange} />
      <fieldset>
        <input type="text" name="startDate" placeholder="start date" value={education.startDate} onChange={onChange} />
        <input type="text" name="endDate" placeholder="end date" value={education.endDate} onChange={onChange} />
      </fieldset>
      {!itemToEdit ? (
        <button type="submit">add</button>
      ) : (
        <button type="button" onClick={handleSave}>
          save
        </button>
      )}

      <button type="button" onClick={handleCancel}>
        cancel
      </button>
    </form>
  );
};

export default FormEducation;
