import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux'

import Recording from '../recording/Recording';

const RecordingBySounds = () => {

    const [isPlay, setIsPlay] = useState(false)
    const [myTimeout, setMyTimeout] = useState(null)

    useEffect(() => {
        return () => clearTimeout(myTimeout)
    })

    const recording = useSelector(state => state.recording)
    const { secounds } = recording

    const soundAction = useSelector(state => state.soundAction)

    const start = () => {
        if (soundAction.length) {
            setIsPlay(true)
            setMyTimeout(setTimeout(() => { setIsPlay(false) }, secounds * 1000))
            playSounds()

        }
        else {
            alert('There are no sounds in the recording!')
        }
    }

    const stop = () => {
        setIsPlay(false)
        clearTimeout(myTimeout)
    }

    const playSounds = () => {
        soundAction.map(sound => { playSound(sound) })
    }

    const playSound = (soundItem) => {
        const { sound, path, soundArr } = soundItem
        soundArr.map(function (item) {
            play(path, item)
        })
    }

    const play = (path, item) => {
        let { startedIn, stopIn } = item
        const audio0 = new Audio(path)
        stopIn = stopIn || secounds

        audio0.onloadedmetadata = function () {
            setTimeout(() => {
                audio0.play();
                audio0.addEventListener('ended', function () {
                    audio0.currentTime = 0;
                    audio0.play();
                }, false);
            }, startedIn * 1000)

            setTimeout(() => {
                audio0.pause()
            }, ((stopIn) * 1000))
        };
    }


    return (
        <Recording className='recording-by-sounds'
            text='Listen to the sound recording!'
            start={start}
            stop={stop}
            isActive={isPlay}
            secounds={secounds} />
    );
};

export default RecordingBySounds;