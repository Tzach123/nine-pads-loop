import React from 'react';

import './offOnInput.css'

const offOnInput = ({ setOnOff }) => {
    return (
        <div className='off-on-input'>
            <label>On/Off</label>
            <input type='checkbox' onClick={() => setOnOff(pre => !pre)} />
            <span className="slider"></span>
        </div>
    );
};

export default offOnInput;