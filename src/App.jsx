import './App.css';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import FormInfo from './components/forms/FormInfo';
import FormProfile from './components/forms/FormProfile';
import EducationList from './components/EducationList';
import JobList from './components/JobList';
import InfoSection from './components/sections/InfoSection';
import ProfileSection from './components/sections/ProfileSection';
import EduSection from './components/sections/EduSection';
import JobSection from './components/sections/JobSection';
import SkillsSection from './components/sections/SkillsSection';
import SkillsList from './components/SkillsList';
import CustomizeSection from './components/CustomizeSection';

function App() {
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
    onAfterPrint: () => console.log('print'),
  });

  function addEducation(education) {
    setEducationList([...educationList, education]);
  }

  function handleSaveEducation(education, active) {
    const updatedEduList = educationList.map((item) => {
      if (item.id === active.id) {
        console.log('task found');
        return {
          ...item,
          school: education.school,
          degree: education.degree,
          startDate: education.startDate,
          endDate: education.endDate,
        };
      }
      return existingTask;
    });

    setEducationList(updatedEduList);
  }

  function handleDeleteEducation(active) {
    const updatedEduList = educationList.filter((item) => {
      return item.id !== active.id;
    });
    setEducationList(updatedEduList);
  }
  //job
  function addJob(job) {
    setJobList([...jobList, job]);
  }

  function handleSaveJob(job, active) {
    const updated = jobList.map((item) => {
      if (item.id === active.id) {
        return {
          ...item,
          company: job.company,
          position: job.position,
          description: job.description,
          startDate: job.startDate,
          endDate: job.endDate,
        };
      }
      return item;
    });

    setJobList(updated);
  }

  function handleDeleteJob(active) {
    const updated = jobList.filter((item) => {
      return item.id !== active.id;
    });
    setJobList(updated);
  }
  //skills

  function addSkill(skill) {
    setSkills([...skills, skill]);
  }

  function handleSaveSkill(skill, active) {
    const updated = skills.map((current) => {
      if (current.id === active.id) {
        console.log('skill found');
        return { ...current, name: skill.name };
      }
      return current;
    });
    setSkills(updated);
  }

  function handleDeleteSkill(active) {
    const updated = skills.filter((item) => {
      return item.id !== active.id;
    });
    setSkills(updated);
  }

  return (
    <div className="app">
      <Navbar />
      <Main>
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
              <JobList
                addJob={addJob}
                jobList={jobList}
                handleSaveJob={handleSaveJob}
                handleDeleteJob={handleDeleteJob}
              />
              <EducationList
                educationList={educationList}
                addEducation={addEducation}
                handleSaveEducation={handleSaveEducation}
                handleDeleteEducation={handleDeleteEducation}
              />
              <SkillsList
                skillList={skills}
                addSkill={addSkill}
                handleSaveSkill={handleSaveSkill}
                handleDeleteSkill={handleDeleteSkill}
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
      </Main>
      <Footer />
    </div>
  );
}

export default App;
