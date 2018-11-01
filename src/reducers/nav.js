import AppNavigation from '../AppNavigation'

const nav = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}

export default nav
