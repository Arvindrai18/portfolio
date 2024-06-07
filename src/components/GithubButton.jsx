import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

const GithubButton = () => {
  const handleGithubClick = () => {
    window.open('https://github.com/Arvindrai18', '_blank');
  };

  return (
    <div className='git-hub'>
        <Button
      variant="contained"
      startIcon={<GitHubIcon />}
      onClick={handleGithubClick}
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

export default GithubButton;
