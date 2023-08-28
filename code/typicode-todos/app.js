const fetchTodos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        const response = await fetch (url + "?_limit=10");
        const data = await response.json();
        console.log(data);
        displayTodos(data);
    } catch (error) {
        console.log(error);
    }
}

function displayTodos(todos) {
    const todoDisplay = document.getElementById('todo-display');
    const todoList = document.createElement('div');
    todoDisplay.appendChild(todoList);
    todos.forEach(todo => {
        const li = document.createElement('li');
        todoList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', fetchTodos);