import React, { useState } from 'react';

import { useSelector } from 'react-redux'

import AudioReactRecorder, { RecordState } from 'audio-react-recorder'

import PlayStopButton from '../../components/playStopButton/PlayStopButton'

import './recordButton.css'

const RecordButton = ({ start, stop }) => {

    const [record, setRecord] = useState(null)

    const timer = useSelector(state => state.timer)
    const { secounds, isActive } = timer

    const startRecording = () => {
        setRecord(RecordState.START)
        start()
    }
    const stopRecording = () => {
        setRecord(RecordState.STOP)
    }

    const onStop = (audioData) => {
        stop(audioData)
    }

    return (
        <div className='record-button'>
            <PlayStopButton start={startRecording} stop={stopRecording} isActive={isActive} />
            {isActive && <label> {secounds}s</label>}
            <AudioReactRecorder state={record} onStop={onStop} />
        </div>
    );
};

export default RecordButton;