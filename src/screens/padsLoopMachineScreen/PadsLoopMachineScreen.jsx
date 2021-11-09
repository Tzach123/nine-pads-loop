import React, { useState, useCallback } from 'react';

import useTimer from '../../hooks/useTimer'

import { OnOffContext } from '../../contexts/OnOffContext';

import OffOnInput from '../../components/offOnInput/OffOnInput'
import { PadsBoard, PadsBoardControl, PadsBoardBody } from '../../components/padsBoard/PadsBoard'
import Pad from '../../components/pad/Pad'
import RecordButton from '../../components/recordButton/RecordButton'
import RecordingWithMic from '../../components/recordingWithMic/RecordingWithMic'
import RecordingBySounds from '../../components/recordingBySounds/RecordingBySounds';

import { sounds } from '../../assets/index'

import './padsLoopMachineScreen.css'

const PadsLoop = () => {

    const [audioData, setAudioData] = useState(null)
    const [onOff, setOnOff] = useState(true)

    const [start, stop] = useTimer()
    const { sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9 } = sounds

    const stopTimer = useCallback((audio) => {
        setAudioData(audio)
        stop()
    })

    return (
        <OnOffContext.Provider value={onOff}>
            <div className='pads-loop-machine'>
                {audioData &&
                    <div style={{ display: 'flex' }}>
                        <RecordingWithMic audioData={audioData} />
                        <RecordingBySounds />
                    </div>}
                <PadsBoard>
                    <PadsBoardControl>
                        <OffOnInput setOnOff={setOnOff} />
                        {onOff && <RecordButton start={start} stop={stopTimer} />}
                    </PadsBoardControl>
                    <PadsBoardBody>
                        <Pad sound={sound1} color='red' />
                        <Pad sound={sound4} color='blue' />
                        <Pad sound={sound7} color='green' />
                        <Pad sound={sound2} color='red' />
                        <Pad sound={sound5} color='blue' />
                        <Pad sound={sound8} color='green' />
                        <Pad sound={sound3} color='red' />
                        <Pad sound={sound6} color='blue' />
                        <Pad sound={sound9} color='green' />
                    </PadsBoardBody>
                </PadsBoard>
            </div>
        </OnOffContext.Provider>
    );
};

export default PadsLoop;