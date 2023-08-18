import { useState } from 'react';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import FormInfo from './components/forms/FormInfo';
import FormProfile from './components/forms/FormProfile';
import EducationList from './components/EducationList';
import './App.css';

function App() {
  const testList = [];

  const [toggleForm, setToggleForm] = useState(true);

  const [personalInfo, setPersonalInfo] = useState({
    fullname: '',
    email: '',
    address: '',
    phone: '',
  });
  const [education, setEducation] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });
  const [profile, setProfile] = useState('');
  const [educationList, setEducationList] = useState([...testList]);
  const [educationToEdit, setEducationEdit] = useState(null);

  // info

  function handlePersonalInfoChange(e) {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  }
  // profile
  function handleProfileInput(e) {
    setProfile(e.target.value);
  }

  // education
  function handleEduSubmit(e) {
    e.preventDefault();
    setEducationList([...educationList, education]);
    setEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
    setToggleForm(!toggleForm);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setEducation({ ...education, id: Math.random() * 10000, [name]: value });
  }
  // handle toggle
  function handleToggle() {
    setToggleForm(!toggleForm);
  }
  function setCurrentEducation(obj) {
    setEducation({ ...obj });
    setEducationEdit({ ...education });
  }
  function handleCancel() {
    setToggleForm(!toggleForm);
  }
  function handleSave() {
    const updatedEduList = educationList.map((existingTask) => {
      if (existingTask.id === educationToEdit.id) {
        console.log('found task');
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
    setEducationEdit(null);
    setEducation({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
    setToggleForm(!toggleForm);
  }

  return (
    <div className="app">
      <Navbar />
      <Main>
        <aside className="sidebar">
          <FormInfo handleChange={handlePersonalInfoChange} handleSubmit={null} personalInfo={personalInfo} />

          <FormProfile handleChange={handleProfileInput} handleSubmit={null} profileText={profile} />
          <EducationList
            educationList={educationList}
            education={education}
            onChange={handleChange}
            onSubmit={handleEduSubmit}
            handleToggle={handleToggle}
            toggle={toggleForm}
            setCurrentEducation={setCurrentEducation}
            handleCancel={handleCancel}
            itemToEdit={educationToEdit}
            handleSave={handleSave}
          />
        </aside>
        <section className="section">
          <div className="resume-container">
            <div className="r-header">
              <p>{personalInfo.fullname}</p>
              <p>{personalInfo.email}</p>
              <p>{personalInfo.address}</p>
              <p>{personalInfo.phone}</p>
            </div>
            <div>
              <h2>Profile</h2>
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
