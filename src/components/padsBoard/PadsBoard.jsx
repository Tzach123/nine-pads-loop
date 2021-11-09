import React from 'react';

import PadsBoardBody from './PadsBoardBody'
import PadsBoardControl from './PadsBoardControl'

import './padsBoard.css'

const PadsBoard = ({ children }) => {
    return (
        <div className='pads-board'>
            {children}
        </div>
    );
};

export { PadsBoard, PadsBoardBody, PadsBoardControl };