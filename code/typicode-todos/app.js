const fetchTodos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
    try {
        const response = await fetch (url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', fetchTodos);