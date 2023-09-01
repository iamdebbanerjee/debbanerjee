const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchTodos = async () => {
    try {
        const response = await fetch (url + "?_limit=5");
        const data = await response.json();
        console.log(data);
        displayTodos(data);
    } catch (error) {
        console.log(error);
    }
}

const displayTodos = (todos) => {
    todos.forEach(todo => {
        addTodosToDOM(todo);
    });
}

const addTodosToDOM = (todo) => {
        const todoDisplay = document.getElementById('todo-display');
        const todoList = document.createElement('div');
        todoDisplay.appendChild(todoList);
        const singleTodo = document.createTextNode(todo.title);
        const singleTodoStatus = todo.completed;
        if (singleTodoStatus === true) {
            todoList.classList.add('done');
        }
        todoList.appendChild(singleTodo);
}

const createTodo = (e) => {
    e.preventDefault();
    const newTodo = document.getElementById('todo-form').firstElementChild.value;
    const newTodoBody = {
        userId: 1,
        completed: false,
        title: newTodo,
    };
    postNewTodo(newTodoBody);
}

const postNewTodo = (todo) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => addTodosToDOM(data));
}

function init() {
    document.addEventListener('DOMContentLoaded', fetchTodos);
    document.getElementById('todo-form').addEventListener('submit', createTodo);
}

init();
