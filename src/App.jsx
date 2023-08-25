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
import './App.css';

function App() {
  const defaultInfo = {
    fullname: '',
    email: '',
    address: '',
    phone: '',
  };
  const [personalInfo, setPersonalInfo] = useState({ ...defaultInfo });
  const [profile, setProfile] = useState('');
  const [educationList, setEducationList] = useState([]);
  const [jobList, setJobList] = useState([]);
  const [skills, setSkills] = useState([]);

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
          <FormInfo setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} />
          <FormProfile profile={profile} setProfile={setProfile} />
          <JobList addJob={addJob} jobList={jobList} handleSaveJob={handleSaveJob} handleDeleteJob={handleDeleteJob} />
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
        </aside>
        <section className="cv-section">
          <button className="download" onClick={generatePdf}>
            <span>Download</span>
            <i className="fa-solid fa-file-pdf"></i>
          </button>
          <div className="wrapper">
            <div ref={componentPDF} className="resume-container">
              <InfoSection personalInfo={personalInfo} />
              <ProfileSection profile={profile} />
              <JobSection title="Experience" list={jobList} />
              <div className="pagebreak"></div>
              <EduSection title="Education" list={educationList} />
              <SkillsSection skillList={skills} />
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
