import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';

const MailButton = () => {
    const handleMailClick = () => {
      window.open('mailto:rai840900@gmail.com', '_blank');
    };
  
    return (
      <div className='Mail-button'>
          <Button
        variant="contained"
        startIcon={<MailIcon/>}
        onClick={handleMailClick}
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
  
  export default MailButton;