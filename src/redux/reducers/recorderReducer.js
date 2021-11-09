import { in_recording, finished_recording } from '../constants/recordConstant'

export const recordingReducer = (state = {}, action) => {
  switch (action.type) {
    case in_recording:
      return { secounds: 0 }
    case finished_recording:
      return { secounds: action.payload }
    default:
      return state
  }
}
