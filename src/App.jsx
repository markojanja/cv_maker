import { useState } from 'react';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import FormInfo from './components/forms/FormInfo';
import FormProfile from './components/forms/FormProfile';
import EducationList from './components/EducationList';
import JobList from './components/JobList';
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

          <JobList addJob={addJob} jobList={jobList} handleSaveJob={handleSaveJob} handleDeleteJob={handleDeleteJob} />
        </aside>
        <section className="cv-section">
          <div className="resume-container">
            <div className="r-header">
              <h2>{personalInfo.fullname}</h2>
              <p>{personalInfo.email}</p>
              <p>{personalInfo.address}</p>
              <p>{personalInfo.phone}</p>
            </div>
            <div className="profile-section">
              <h3>Profile</h3>
              <p>{profile}</p>
            </div>
            <div className="education-section">
              <h3>Education</h3>
              {educationList.map((item) => (
                <p key={item.id}>{item.school}</p>
              ))}
            </div>
            <div className="experience-section">
              <h3>Experience</h3>
              {jobList.map((item) => (
                <div key={item.id}>
                  <p>{item.company}</p>
                  <p>{item.position}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
