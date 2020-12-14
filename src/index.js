import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './redux/rootReducer';
import {asyncIncrement, decrement, increment, themeMode} from "./redux/actions";
import thunk from 'redux-thunk'
import {logger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger),
    ),
)

addBtn.addEventListener('click', () => store.dispatch(increment()))
subBtn.addEventListener('click', () => store.dispatch(decrement()))
asyncBtn.addEventListener('click', () => store.dispatch(asyncIncrement()))

themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
        ? 'dark'
        : 'light'
    store.dispatch(themeMode(newTheme))
})


store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state.counter
    document.body.className = state.theme.value;
    const btnsArr = [addBtn, subBtn, themeBtn, asyncBtn]
    btnsArr.forEach(btn => {
        btn.disabled = state.theme.disabled
    })
})