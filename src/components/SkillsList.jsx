import { useState } from 'react';
import SkillsForm from './forms/SkillsForm';

const SkillsList = ({ skillList, addSkill, handleSaveSkill, handleDeleteSkill }) => {
  const [skill, setSkill] = useState({ name: '' });
  const [toggle, setToggle] = useState(true);
  const [activeSkill, setActiveSkill] = useState(null);

  function EditSkill(obj) {
    setActiveSkill(obj);
    setSkill(obj);
    setToggle(!toggle);
  }
  function handleToggle() {
    setToggle(!toggle);
    setActiveSkill(null);
  }
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Skills</h2>
        <button onClick={() => handleToggle()}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      {toggle && (
        <SkillsForm
          skill={skill}
          active={activeSkill}
          setSkill={setSkill}
          addSkill={addSkill}
          setToggle={setToggle}
          handleSaveSkill={handleSaveSkill}
          handleDeleteSkill={handleDeleteSkill}
        />
      )}
      {!toggle && (
        <div>
          {skillList.map((item) => (
            <div className="sidebar-card" key={item.id}>
              <p>{item.name}</p>
              <button onClick={() => EditSkill(item)}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsList;
