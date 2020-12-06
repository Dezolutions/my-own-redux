import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { rootReducer } from './redux/rootReducer'
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions'
import './styles.css'


const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

const store = createStore(rootReducer, applyMiddleware(thunk, logger));


addBtn.onclick = () => {
  store.dispatch(increment())
}

subBtn.onclick = () => {
  store.dispatch(decrement())
}

asyncBtn.onclick = () => {
  store.dispatch(asyncIncrement())
}

themeBtn.onclick = () => {
  const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'
  store.dispatch(changeTheme(newTheme))
}


store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value;
  [addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => btn.disabled = state.theme.disabled == true)
})



store.dispatch({ type: 'INIT' })
