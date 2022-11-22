// import { createStore } from './createStore';
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk';

import { rootReducer } from './redux/rootReducer';
import './styles.css';
import { asyncIncrement, changeTheme, changeWeight, decrement, increment } from "./redux/actions";

const counter = document.getElementById('counter');
const weight = document.getElementById('weight');
const addBtn = document.getElementById('add');
const addWeightBtn = document.getElementById('addWeight');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const allButtons = [addBtn, subBtn, asyncBtn, themeBtn, addWeightBtn];
allButtons.forEach(b => b.addEventListener('click', () => eventListener(b.getAttribute('data-id'))));


// Custom middleware template
// function loggerCustom(state){
// 	return function (next){
// 		return function(action){
// 			return next(action);
// 		}
// 	}
// }

const store = createStore(
	rootReducer, 
	applyMiddleware(thunk)
	// applyMiddleware(thunk, logger)
);

// GUI handle functions
const applyCounter = () => counter.textContent = store.getState().counter.toString();
const applyWeight = () => weight.textContent = store.getState().weight.toString();
const applyWeightAmount = (amount) => document.getElementById('weightAmount').value = amount;
const applyTheme = () => document.body.className = store.getState().theme.value;
const disableButtons = (value = false) => {
	allButtons.forEach(b => b.disabled = value);
}


store.subscribe(() => {
	applyCounter();
	applyWeight();
	applyTheme();
	applyWeightAmount(0);
	disableButtons();
})

function eventListener(act){
	const actions = {
		"addWeight": () => {
			const weightAmount = Number(document.getElementById('weightAmount').value);
			store.dispatch(changeWeight(weightAmount))
		}, 

		"add" : () => store.dispatch(increment()),

		"sub": () => store.dispatch(decrement()),

		"theme": () => {
			const lightTheme = document.body.classList.contains('light');
			const newTheme = (lightTheme)
				? 'dark'
				: 'light'

			store.dispatch(changeTheme(newTheme))
		},

		"async" : () => {
			disableButtons(true);
			store.dispatch(asyncIncrement(1000))
		},
	}

	if (typeof (actions[act]) === 'function')
		actions[act]();
}

// Initial call
store.dispatch({ type: 'INIT_APPLICATION' })

