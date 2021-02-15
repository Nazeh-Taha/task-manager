import React from 'react';
import '../styles/avatarStyle.scss';

export default function Avatar({ imageUrl = '', alt = '' }) {
    return (
//--------component for user avatar ---------------
        <div className="avatarComponent">
            <img src={imageUrl} alt={alt} />
            <span></span>
        </div>
    );
};

