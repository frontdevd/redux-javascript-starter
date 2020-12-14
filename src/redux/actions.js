import {DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT, THEME_MODE} from "./types";

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

export function themeMode(newTheme) {
    return {
        type: THEME_MODE,
        payload: newTheme
    }
}
export function enableBtns() {
    return {
        type: ENABLE_BUTTONS,
    }
}
export function disableBtns() {
    return {
        type: DISABLE_BUTTONS,
    }
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableBtns())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enableBtns())
        }, 2000)
    }
}