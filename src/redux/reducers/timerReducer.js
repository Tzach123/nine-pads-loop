import { active, inactive } from '../constants/timerConstant'

export const timerReducer = (
  state = { secounds: 0, isActive: false },
  action
) => {
  switch (action.type) {
    case active:
      return { secounds: state.secounds + 1, isActive: true }
    case inactive:
      return { secounds: 0, isActive: false }
    default:
      return state
  }
}
