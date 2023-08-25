import FormEducation from './forms/FormEducation';
import { useState } from 'react';

const EducationList = ({ addEducation, educationList, handleSaveEducation, handleDeleteEducation }) => {
  const defaultEducation = {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  };
  const [education, setEducation] = useState(defaultEducation);
  const [toggle, setToggle] = useState(true);
  const [activeEducation, setActiveEducation] = useState(null);

  function editEducation(obj) {
    setActiveEducation(obj);
    setEducation(obj);
    setToggle(!toggle);
  }
  function handleToggle() {
    setToggle(!toggle);
    setActiveEducation(null);
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Education</h2>
        <button className="sidebar-btn" onClick={() => handleToggle()}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      {toggle && (
        <FormEducation
          education={education}
          active={activeEducation}
          setEducation={setEducation}
          addEducation={addEducation}
          setToggle={setToggle}
          handleSaveEducation={handleSaveEducation}
          handleDeleteEducation={handleDeleteEducation}
        />
      )}
      {!toggle && (
        <div>
          {educationList.map((item) => (
            <div className="sidebar-card" key={item.id}>
              <p>{item.school}</p>
              <button className="sidebar-btn" onClick={() => editEducation(item)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationList;
