import React, { useState } from "react";
import PicComponent from "./picComponent";
import Nametag from "./nameTag";
import NamePlate from "./namePlate";
import AboutButton from "./About";
import SkillButton from "./SkillButton";
import Educationbutton from "./Educationbutton"; 
import ContactButton from "./Contact";
import CopyrightSection from "./Copyright";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
const Left = (props) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showSkill, setShowSkill] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const toggleSkill = () => {
    setShowSkill(!showSkill);
  };

  const toggleEducation = () => {
    setShowEducation(!showEducation);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="split left">
      <div className="side">
        <div className="profile-pic-container">
          <PicComponent src={props.images} alt={props.alt} />
          <NamePlate name={props.name} />
          <Nametag style={props.style} />
          {showAbout && (
            <div>
              <p>Currently a B.tech walllah</p>
            </div>
          )}
          {showSkill && (
            <div>
              <p>Languages:C,C++,Python,Java
                  Frontend:Html,css,bootstrap
                  Backend:Node.js,Express.js,Django
                  Database:SQL,MongoDB.
                  Data Science:Python,R,Excel
                  </p>
            </div>
          )}
          {showEducation && (
            <div>
              <p>
                10th-St. Paul School,Sasaram
                12th-Sunbeam English School,Bhagwanpur
                Graduation-KIIT
              </p>
            </div>
          )}
          {showContact && (
            <div>
              <p><PhoneAndroidIcon/>:7250609538</p>
            </div>
          )}
          <div className="button-container">
            <AboutButton onClick={toggleAbout} />
            <SkillButton onClick={toggleSkill} />
            <Educationbutton onClick={toggleEducation} />
            <ContactButton onClick={toggleContact}/>
          </div>
          <CopyrightSection/>
        </div>
      </div>
    </div>
  );
};

export default Left;
