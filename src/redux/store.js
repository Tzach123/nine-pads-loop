import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { timerReducer } from '../redux/reducers/timerReducer'
import { recordingReducer } from '../redux/reducers/recorderReducer'
import { soundActionReducer } from './reducers/soundActionReducer'

const reducer = combineReducers({
  timer: timerReducer,
  recording: recordingReducer,
  soundAction: soundActionReducer,
})

const initState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
