import React from "react";
import TagLine from "./Tagline";
import DTag from "./DeveloperTag";
import GithubButton from './GithubButton';
import InstagramButton from "./InstagramButton";
import LinkedInButton from "./LinkedIn";
import MailButton
 from "./MailButton";
const Right = () => {
  return (
    <div className="split right">
      <div className="side">
      <InstagramButton/>
      <GithubButton />
      <LinkedInButton/>
      <MailButton/>
        <TagLine
          name="I am"
        />
        <DTag
          name="a Developer"
        />
        
      </div>
    </div>
  );
}

export default Right;