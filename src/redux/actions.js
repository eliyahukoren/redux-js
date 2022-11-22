import { CHANGE_THEME, CHANGE_WEIGHT, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types";

export function increment(){
	return {
		type: INCREMENT
	}
}

export function decrement(){
	return {
		type: DECREMENT
	}
}

export function changeWeight(amount){
	return {
		type: CHANGE_WEIGHT,
		payload: amount
	}
}

export function enableButtons(){
	return {
		type: ENABLE_BUTTONS
	}
}

export function disableButtons(){
	return {
		type: DISABLE_BUTTONS
	}
}

export function changeTheme(theme){
	return {
		type: CHANGE_THEME,
		payload: theme
	}
}

export function asyncIncrement( delay = 2000){
	return function(dispatch){
		dispatch(disableButtons())
		setTimeout(() => {
			dispatch(increment())
			dispatch(enableButtons())
		}, delay)
	}
}
