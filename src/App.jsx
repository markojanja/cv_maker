import { useState } from 'react';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import FormInfo from './components/forms/FormInfo';
import FormProfile from './components/forms/FormProfile';
import EducationList from './components/EducationList';
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
            <div>
              {educationList.map((item) => (
                <p key={item.id}>{item.school}</p>
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
