import React from 'react';
import './timer.css'

const Timer = ({ s }) => {
    const circleStyle = {
        animationDuration: `${s}s`
    }

    return (
        <div className='timer'>
            <div className='circle' style={circleStyle}></div>
            <div className='line'></div>
        </div >
    );
};

export default Timer;