import React, { useState, useEffect, useContext } from 'react';

import { OnOffContext } from '../../contexts/OnOffContext';
import { useDispatch, useSelector } from 'react-redux'
import useSound from 'use-sound'

import { start_sound, stop_sound, start_sound_before } from '../../redux/constants/soundReducerConstant'

import './pad.css'

const Pad = ({ sound, color }) => {

    const dispatch = useDispatch()

    const offOn = useContext(OnOffContext)

    const [play, { stop, duration }] = useSound(sound);
    const [isPlay, setIsPlay] = useState(false)
    const [myInterval, setMyInterval] = useState(null)

    const timer = useSelector(state => state.timer)
    const { secounds, isActive } = timer

    const recording = useSelector(state => state.recording)
    const { secounds: recordingSecounds } = recording

    const className = `${color} ${isPlay ? 'active' : ''}`

    useEffect(() => {
        if (isPlay && offOn) {
            soundPlay()
        } else {
            soundStop()
        }
        return () => clearInterval(myInterval)
    }, [isPlay, offOn])

    useEffect(() => {
        if (isPlay && isActive) {
            dispatch({ type: start_sound_before, payload: { sound, secounds } })
        } else if (isPlay && !isActive) {
            console.log('11');
            dispatch({ type: stop_sound, payload: { sound, secounds: recordingSecounds } })
        }

    }, [isActive])


    const soundPlay = () => {
        play()
        if (isActive) {
            dispatch({ type: start_sound, payload: { sound, secounds } })
        }
        const interval = setInterval(() => play(), duration)
        setMyInterval(interval)
    }
    const soundStop = () => {
        stop()
        if (isActive) {
            dispatch({ type: stop_sound, payload: { sound, secounds } })
        }
        clearInterval(myInterval)
        setMyInterval(null)
    }


    return (
        <div className='pad' >
            <button className={className} onClick={() => setIsPlay(pre => !pre)} ></button>
        </div >
    );
};

export default Pad;