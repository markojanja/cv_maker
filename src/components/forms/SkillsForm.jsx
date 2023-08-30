import ButtonGroup from '../sidebar/ButtonGroup';

const SkillsForm = ({ skill, active, setSkill, setToggle, addSkill, handleSaveSkill, handleDeleteSkill }) => {
  function handleInput(e) {
    setSkill({ ...skill, name: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addSkill('skill', { ...skill, id: Date.now() });
    setSkill({ name: '' });
    setToggle(false);
  }
  function onSave() {
    handleSaveSkill('skill', skill, active);
    setToggle(false);
    setSkill({ name: '' });
  }

  function handleCancel() {
    setSkill({ name: '' });
    setToggle(false);
  }

  function onDelete() {
    handleDeleteSkill('skill', active);
    setToggle(false);
    setSkill({ name: '' });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="skill" placeholder="skill" value={skill.name} onChange={handleInput} required />

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

export default SkillsForm;
