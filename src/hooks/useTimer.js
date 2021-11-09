import { useState, useEffect, useCallback, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { active, inactive } from '../redux/constants/timerConstant'
import {
  in_recording,
  finished_recording,
} from '../redux/constants/recordConstant'
import { reset_sound } from '../redux/constants/soundReducerConstant'
import { OnOffContext } from '../contexts/OnOffContext'

const useTimer = () => {
  const [myInterval, setMyInterval] = useState(null)
  const dispatch = useDispatch()

  const timer = useSelector((state) => state.timer)
  const { secounds } = timer

  const offOn = useContext(OnOffContext)

  useEffect(() => {
    return () => clearInterval(myInterval)
  }, [])

  const start = useCallback(() => {
    dispatch({ type: in_recording })
    dispatch({ type: reset_sound })
    dispatch({ type: active })
    setMyInterval(setInterval(() => dispatch({ type: active }), 1000))
  })

  const stop = useCallback(() => {
    clearInterval(myInterval)
    dispatch({ type: finished_recording, payload: secounds })
    dispatch({ type: inactive })
  })

  return [start, stop]
}

export default useTimer
