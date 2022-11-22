import './styles.css';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

let state = 0;
const btns = [addBtn, subBtn, asyncBtn, themeBtn];

function render() {
	counter.textContent = state.toString();
}

function eventListener(act) {
	const actions = {
		"add": () => { state++; render() },
		"sub": () => { state--; render() },
		"theme": () => { document.body.classList.toggle('dark'); render() },
		"async": () => setTimeout(() => { state++; render() }, 2000)
	}

	actions[act]();
}

btns.forEach(b => b.addEventListener('click', () => eventListener(b.getAttribute('data-id'))));
render();
