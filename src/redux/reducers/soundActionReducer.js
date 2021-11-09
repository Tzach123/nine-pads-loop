import {
  start_sound,
  stop_sound,
  reset_sound,
  start_sound_before,
} from '../constants/soundReducerConstant'

export const soundActionReducer = (state = [], action) => {
  switch (action.type) {
    case start_sound:
      //file name
      var path = action.payload.sound.split('/')
      var soundName = path[path.length - 1]

      var index = state.findIndex((item) => item.sound === soundName)
      if (index === -1) {
        return [
          ...state,
          {
            sound: soundName,
            path: action.payload.sound,
            soundArr: [{ id: 1, startedIn: action.payload.secounds }],
          },
        ]
      } else {
        //file name
        var path = action.payload.sound.split('/')
        var soundName = path[path.length - 1]

        var newState = [...state]
        var soundArr = newState[index].soundArr
        soundArr.push({
          id: soundArr.length + 1,
          startedIn: action.payload.secounds,
        })
        return [...newState]
      }
    case start_sound_before: {
      return [
        ...state,
        {
          sound: soundName,
          path: action.payload.sound,
          soundArr: [{ id: 1, startedIn: 0 }],
        },
      ]
    }
    case stop_sound:
      console.log('dghrfyh')
      var index = state.findIndex((item) => item.path === action.payload.sound)
      var newState = [...state]
      var soundArr = newState[index].soundArr
      var soundAction = soundArr.find((item) => item.id === soundArr.length)
      soundAction.stopIn = action.payload.secounds
      console.log(action.payload)
      return [...newState]

    case reset_sound:
      return []
    default:
      return state
  }
}
