import { CHANGE_THEME, CHANGE_WEIGHT, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from './types';
import {combineReducers} from "redux";

function counterReducer(state = 0, action){
	if(action.type === INCREMENT){
		return state + 1
	}else if( action.type === DECREMENT){
		return state - 1; 
	}

	return state;
}

const initialTheme = { value: 'light'}

function themeReducer(state = initialTheme, action){
	switch (action.type){
		case CHANGE_THEME:
			return {...state, value: action.payload }
		case DISABLE_BUTTONS:
			return {...state, disabled: true}	
		case ENABLE_BUTTONS:
			return {...state, disabled: false}	
		default: return state	
	}
}

function weightReducer(state = 100, action){
	switch(action.type){
		case CHANGE_WEIGHT:
			return state + action.payload;
		default: return state;
	}
}

export const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
	weight: weightReducer,
})

