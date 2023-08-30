import FormInfo from '../forms/FormInfo';
import FormProfile from '../forms/FormProfile';
import EducationList from './EducationList';
import JobList from './JobList';
import SkillsList from './SkillsList';
import CustomizeSection from './CustomizeSection';
import { useState } from 'react';

const Sidebar = ({
  setPersonalInfo,
  personalInfo,
  profile,
  setProfile,
  jobList,
  educationList,
  skills,
  add,
  handleSave,
  handleDelete,
  color,
  fontColor,
  setColor,
  setFontColor,
}) => {
  const [isTabActive, setIsTabActive] = useState(true);
  return (
    <aside className="sidebar">
      <>
        <button className="btn" onClick={() => setIsTabActive(!isTabActive)}>
          {isTabActive ? 'customize' : 'edit portfolio'}
        </button>
      </>
      {isTabActive && (
        <>
          <FormInfo setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} />
          <FormProfile profile={profile} setProfile={setProfile} />
          <JobList addJob={add} jobList={jobList} handleSaveJob={handleSave} handleDeleteJob={handleDelete} />
          <EducationList
            educationList={educationList}
            addEducation={add}
            handleSaveEducation={handleSave}
            handleDeleteEducation={handleDelete}
          />
          <SkillsList skillList={skills} addSkill={add} handleSaveSkill={handleSave} handleDeleteSkill={handleDelete} />
        </>
      )}
      {!isTabActive && (
        <CustomizeSection color={color} setColor={setColor} fontColor={fontColor} setFontColor={setFontColor} />
      )}
    </aside>
  );
};

export default Sidebar;
