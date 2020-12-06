import { CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

export function increment() {
  return {
    type: INCREMENT
  }
}
export function decrement() {
  return {
    type: DECREMENT
  }
}

export function disable() {
  return {
    type: DISABLE_BUTTONS
  }
}

export function enable() {
  return {
    type: ENABLE_BUTTONS
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disable())
    setTimeout(() => {
      dispatch(increment())
      dispatch(enable())
    }, 1500)
  }
}