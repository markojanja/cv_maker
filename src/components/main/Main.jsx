import './Main.css';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import FormInfo from '../forms/FormInfo';
import FormProfile from '../forms/FormProfile';
import EducationList from '../EducationList';
import JobList from '../JobList';
import InfoSection from '../sections/InfoSection';
import ProfileSection from '../sections/ProfileSection';
import EduSection from '../sections/EduSection';
import JobSection from '../sections/JobSection';
import SkillsSection from '../sections/SkillsSection';
import SkillsList from '../SkillsList';
import CustomizeSection from '../CustomizeSection';

const Main = () => {
  const defaultInfo = {
    fullname: '',
    email: '',
    address: '',
    phone: '',
  };

  const [color, setColor] = useState('#4858EC');
  const [fontColor, setFontColor] = useState('#FFFFFF');
  const [personalInfo, setPersonalInfo] = useState({ ...defaultInfo });
  const [profile, setProfile] = useState('');
  const [educationList, setEducationList] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isTabActive, setIsTabActive] = useState(true);

  const componentPDF = useRef();

  const generatePdf = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: 'userPdf',
  });

  function add(type, obj) {
    if (type === 'education') {
      setEducationList([...educationList, obj]);
    }
    if (type === 'job') {
      setJobList([...jobList, obj]);
    }
    if (type === 'skill') {
      setSkills([...skills, obj]);
    }
  }

  function handleSave(type, obj, active) {
    if (type === 'education') {
      const updatedEduList = educationList.map((item) => {
        if (item.id === active.id) {
          return {
            ...item,
            school: obj.school,
            degree: obj.degree,
            startDate: obj.startDate,
            endDate: obj.endDate,
          };
        }
        return item;
      });
      setEducationList(updatedEduList);
    }
    if (type === 'job') {
      const updated = jobList.map((item) => {
        if (item.id === active.id) {
          return {
            ...item,
            company: obj.company,
            position: obj.position,
            description: obj.description,
            startDate: obj.startDate,
            endDate: obj.endDate,
          };
        }
        return item;
      });

      setJobList(updated);
    }
    if (type === 'skill') {
      const updated = skills.map((item) => {
        if (item.id === active.id) {
          return { ...item, name: obj.name };
        }
        return item;
      });
      setSkills(updated);
    }
  }

  function handleDelete(type, active) {
    if (type === 'education') {
      const updated = educationList.filter((item) => {
        return item.id !== active.id;
      });
      setEducationList(updated);
    }
    if (type === 'job') {
      const updated = jobList.filter((item) => {
        return item.id !== active.id;
      });
      setJobList(updated);
    }
    if (type === 'skill') {
      const updated = skills.filter((item) => {
        return item.id !== active.id;
      });
      setSkills(updated);
    }
  }
  return (
    <main>
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
            <SkillsList
              skillList={skills}
              addSkill={add}
              handleSaveSkill={handleSave}
              handleDeleteSkill={handleDelete}
            />
          </>
        )}
        {!isTabActive && (
          <CustomizeSection color={color} setColor={setColor} fontColor={fontColor} setFontColor={setFontColor} />
        )}
      </aside>
      <section className="cv-section">
        <button className="download" onClick={generatePdf}>
          <span>Download</span>
          <i className="fa-solid fa-file-pdf"></i>
        </button>
        <div className="wrapper">
          <div ref={componentPDF} className="resume-container">
            <InfoSection personalInfo={personalInfo} color={color} fontColor={fontColor} />
            <ProfileSection profile={profile} />
            <JobSection title="Experience" list={jobList} color={color} fontColor={fontColor} />
            <div className="pagebreak"></div>
            <EduSection title="Education" list={educationList} />
            <SkillsSection skillList={skills} color={color} fontColor={fontColor} />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
