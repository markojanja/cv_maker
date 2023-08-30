import './Main.css';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Sidebar from '../sidebar/Sidebar';
import CvSection from '../cv_container/CvSection';
import DownloadButton from '../DownloadButton';

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
      <Sidebar
        setPersonalInfo={setPersonalInfo}
        personalInfo={personalInfo}
        profile={profile}
        setProfile={setProfile}
        jobList={jobList}
        educationList={educationList}
        skills={skills}
        add={add}
        handleSave={handleSave}
        handleDelete={handleDelete}
        color={color}
        fontColor={fontColor}
        setColor={setColor}
        setFontColor={setFontColor}
      />
      <CvSection
        componentPDF={componentPDF}
        color={color}
        fontColor={fontColor}
        personalInfo={personalInfo}
        profile={profile}
        jobList={jobList}
        educationList={educationList}
        skills={skills}
      />
      <DownloadButton onClick={generatePdf} />
    </main>
  );
};
export default Main;
