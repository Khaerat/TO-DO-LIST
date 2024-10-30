const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

function addTodo() {
    if(todoInput.value.trim()){
        todoList.innerHTML = '<li onclick ="this.classList.toggle(completed)">${todoInput.value} <button onclick= "event.stopPropagation(); this.parentElement.remove()"> Delete</button></li>'

        todoInput.value='';
    }
}
todoInput.addEventListener('keypress', e => e.key === 'Enter' && addTodo());