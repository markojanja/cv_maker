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
  const defaultEducation = {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  };
  const defaultInfo = {
    fullname: '',
    email: '',
    address: '',
    phone: '',
  };
  const [toggleForm, setToggleForm] = useState(true);
  const [personalInfo, setPersonalInfo] = useState({ ...defaultInfo });
  const [profile, setProfile] = useState('');
  const [education, setEducation] = useState({ ...defaultEducation });
  const [educationList, setEducationList] = useState([]);
  const [activeEducation, setActiveEducation] = useState(null);
  const [jobList, setJobList] = useState([]);
  const [skills, setSkills] = useState([]);

  const componentPDF = useRef();

  const generatePdf = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: 'userPdf',
    onAfterPrint: () => console.log('print'),
  });

  function addEducation(e) {
    e.preventDefault();
    setEducationList([...educationList, education]);
    setEducation({ ...defaultEducation });
    setToggleForm(!toggleForm);
  }

  function setCurrentEducation(obj) {
    setEducation({ ...obj });
    setActiveEducation({ ...obj });
  }

  function handleSave() {
    const updatedEduList = educationList.map((existingTask) => {
      if (existingTask.id === activeEducation.id) {
        console.log('task found');
        return {
          ...existingTask,
          school: education.school,
          degree: education.degree,
          startDate: education.startDate,
          endDate: education.endDate,
        };
      }
      return existingTask;
    });

    setEducationList(updatedEduList);
    setActiveEducation(null);
    setEducation({ ...defaultEducation });
    setToggleForm(!toggleForm);
  }

  function handleDelete() {
    const updatedEduList = educationList.filter((item) => {
      return item.id !== activeEducation.id;
    });
    setEducationList(updatedEduList);
    setActiveEducation(null);
    setEducation({ ...defaultEducation });
    setToggleForm(!toggleForm);
  }
  function handleCancel() {
    setActiveEducation(null);
    setEducation({ ...defaultEducation });
    setToggleForm(!toggleForm);
  }

  //job
  function addJob(job) {
    setJobList([...jobList, job]);
  }

  function handleSaveJob(job, active) {
    const updated = jobList.map((existingJob) => {
      if (existingJob.id === active.id) {
        return {
          ...existingJob,
          company: job.company,
          position: job.position,
          description: job.description,
          startDate: job.startDate,
          endDate: job.endDate,
        };
      }
      return existingJob;
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
            education={education}
            setEducation={setEducation}
            activeEducation={activeEducation}
            toggleForm={toggleForm}
            onSubmit={addEducation}
            setToggleForm={setToggleForm}
            setCurrentEducation={setCurrentEducation}
            handleSave={handleSave}
            handleDelete={handleDelete}
            handleCancel={handleCancel}
          />
          <SkillsList skillList={skills} addSkill={addSkill} handleSaveSkill={handleSaveSkill} handleDeleteSkill={handleDeleteSkill} />
        </aside>
        <section className="cv-section">
          <button onClick={generatePdf}>PDF</button>
          <div className="wrapper">
            <div ref={componentPDF} className="resume-container">
              <InfoSection personalInfo={personalInfo} />
              <ProfileSection profile={profile} />
              <JobSection title="Experience" list={jobList} />
              {jobList.length >= 2 && <div className="pagebreak"></div>}
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
