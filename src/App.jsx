import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Form from './components/Form';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullname: '',
    email: '',
    address: '',
    phone: '',
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  }

  return (
    <div className="app">
      <Navbar />
      <Main>
        <aside className="sidebar">
          <Form
            handleChange={handleChange}
            handleSubmit={console.log(personalInfo)}
            personalInfo={personalInfo}
          />
        </aside>
        <div>
          <p>{personalInfo.fullname}</p>
          <p>{personalInfo.email}</p>
          <p>{personalInfo.address}</p>
          <p>{personalInfo.phone}</p>
        </div>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
