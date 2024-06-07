import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

const LinkedInButton = () => {
    const handleLinkedInClick = () => {
      window.open('https://www.linkedin.com/in/arvind-rai-391a81277/', '_blank');
    };
  
    return (
      <div className='linkedin-button'>
          <Button
        variant="contained"
        startIcon={<LinkedInIcon/>}
        onClick={handleLinkedInClick}
        sx={{
          marginTop: '20px',
          backgroundColor: 'transparent',
          color: 'inherit',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
          boxShadow: 'none',
        }}
      >
       
      </Button>
      </div>
    );
  };
  
  export default LinkedInButton;
  