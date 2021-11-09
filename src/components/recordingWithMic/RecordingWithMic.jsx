import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux'

import Recording from '../recording/Recording';


import './recordingWithMic.css'

const RecordingWithMic = ({ audioData }) => {

    const [audio, setAudio] = useState(null)
    const [isActive, setIsActive] = useState(false)
    const [myTimeout, setMyTimeout] = useState(null)

    useEffect(() => {
        return () => clearTimeout(myTimeout)
    })

    const recording = useSelector(state => state.recording)
    const { secounds } = recording

    const start = () => {
        //Play the recording
        var blobURL = window.URL.createObjectURL(audioData.blob);
        var audio0 = new Audio(blobURL);
        audio0.play();

        setAudio(audio0)

        setIsActive(true)
        setMyTimeout(setTimeout(() => {
            setIsActive(false)
        }, secounds * 1000))
    }

    const stop = () => {
        // Pause the recording
        audio.pause()

        clearTimeout(myTimeout)

        const newAudio = { audio }
        newAudio.currentTime = 0
        setAudio(newAudio)

        setIsActive(false)
    }

    return (
        <Recording className={'recording-with-mic'}
            text='Listen to the recording from the microphone!'
            start={start}
            stop={stop}
            isActive={isActive}
            secounds={secounds} />
    );
};

export default RecordingWithMic;