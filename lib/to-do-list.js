import Mustache from "mustachejs";

const container = document.querySelector('#todosContainer')
const template = document.querySelector('#todoTemplate').innerHTML

const button = document.querySelector('#addButton')
const input = document.getElementById('input')




const todos = JSON.parse(localStorage.getItem('todos')) || []


button.addEventListener('click', (event) => {
  const todoText = input.value
  const newTodo = { title: todoText, done: false }
  todos.push(newTodo)
  input.value = ''
  refreshTodos()
  localStorage.setItem('todos', JSON.stringify(todos))

})


const refreshTodos = () => {
  const output = Mustache.render(template, {todos: todos})
  container.innerHTML = output
}

refreshTodos()




















// To-do item HTML 👇
// <div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
//   <input class="d-flex form-check-input me-1" type="checkbox">
//   <div>Replace with to-do title</div>
// </div>

// TODO: Dynamically generate a list of to-dos based on `todos` array, and display them
