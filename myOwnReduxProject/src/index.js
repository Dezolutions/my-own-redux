import './styles.css'
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { increment, decrement } from './redux/actions'
const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

const store = createStore(rootReducer, 0);


addBtn.onclick = () => {
  store.dispatch(increment())
}

subBtn.onclick = () => {
  store.dispatch(decrement())
}

asyncBtn.onclick = () => {

}
store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
})
store.dispatch({ type: 'INIT' })

themeBtn.onclick = () => {
  document.body.classList.toggle('dark')
}
