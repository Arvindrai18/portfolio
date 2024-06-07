import React from 'react';

const PicComponent = ({ src, alt }) => {
    return (
        <div className="profile-pic">
            <img src={src} alt={alt} />
        </div>
    );
};

export default PicComponent;
