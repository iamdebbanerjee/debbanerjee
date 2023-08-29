const fetchTodos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        const response = await fetch (url + "?_limit=15");
        const data = await response.json();
        console.log(data);
        displayTodos(data);
    } catch (error) {
        console.log(error);
    }
}

function displayTodos(todos) {
    const todoDisplay = document.getElementById('todo-display');
    todos.forEach(todo => {
        const todoList = document.createElement('div');
        todoDisplay.appendChild(todoList);
        const singleTodo = document.createTextNode(todo.title);
        todoList.appendChild(singleTodo);
    });
}

document.addEventListener('DOMContentLoaded', fetchTodos);