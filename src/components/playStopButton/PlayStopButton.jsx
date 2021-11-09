import React, { useState } from 'react';

import { FaPlay, FaStop } from 'react-icons/fa'

import './playStopButton.css'

const PlayStopButton = ({ isActive, start, stop }) => {

    return (
        <div className='play-stop-button'>
            {!isActive ?
                <button onClick={start}><FaPlay /></button> :
                <button onClick={stop}><FaStop /></button>
            }
        </div>
    );
};

export default PlayStopButton;