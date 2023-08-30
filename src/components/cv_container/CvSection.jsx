import React from 'react';
import InfoSection from '../sections/InfoSection';
import ProfileSection from '../sections/ProfileSection';
import JobSection from '../sections/JobSection';
import EduSection from '../sections/EduSection';
import SkillsSection from '../sections/SkillsSection';

const CvSection = ({ componentPDF, color, fontColor, personalInfo, profile, jobList, educationList, skills }) => {
  return (
    <section className="cv-section">
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
  );
};

export default CvSection;
