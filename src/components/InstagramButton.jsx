import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';

const InstagramButton = () => {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/akr.v18', '_blank');
  };

  return (
    <div className='insta-button'>
        <Button
      variant="contained"
      startIcon={<InstagramIcon />}
      onClick={handleInstagramClick}
      sx={{
        marginTop: '0px',
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

export default InstagramButton;
