import './styles.css'

let state = 0;

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

function render() {
  counter.textContent = state.toString()
}

addBtn.onclick = () => {
  state++;
  render()
}

subBtn.onclick = () => {
  state--;
  render()
}

asyncBtn.onclick = () => {
  setTimeout(() => {
    state++;
    render()
  },1500)
}

themeBtn.onclick = () => {
  document.body.classList.toggle('dark')
}
render()