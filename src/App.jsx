import { useState } from 'react';
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
      console.log(item, active);
      return item.id !== active.id;
    });
    setJobList(updated);
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
        </aside>
        <section className="cv-section">
          <div className="resume-container">
            <InfoSection personalInfo={personalInfo} />
            <ProfileSection profile={profile} />
            <JobSection title="Experience" list={jobList} />
            <EduSection title="Education" list={educationList} />
            <SkillsSection />
          </div>
        </section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
