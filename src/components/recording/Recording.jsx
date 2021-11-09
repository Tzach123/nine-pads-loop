import React from 'react';
import PlayStopButton from "../playStopButton/PlayStopButton";
import Timer from '../timer/Timer'
import './recording.css'

const Recording = ({ className, text, start, stop, isActive, secounds }) => {


    return (
        <div className={`recording ${className}`}>
            <label>{text}</label>
            <PlayStopButton start={start} stop={stop} isActive={isActive} />
            {(secounds && isActive) && <Timer s={secounds} />}
        </div>
    );
};

export default Recording;