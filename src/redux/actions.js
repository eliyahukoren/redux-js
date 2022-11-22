import { CHANGE_THEME, CHANGE_WEIGHT, DECREMENT, INCREMENT } from "./types";

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

export function changeTheme(theme){
	return {
		type: CHANGE_THEME,
		payload: theme
	}
}

export function asyncIncrement( delay = 2000){
	return function(dispatch){
		setTimeout(() => {
			dispatch(increment())
		}, delay)
	}
}
