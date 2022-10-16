const fetch = require('node-fetch')

const fetchTodo = async (dispatch, getState) => {
    const myTodos = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
         const todos = await myTodos.json()

         dispatch({
                type: 'todo/LOAD_TODO',
                payload: todos
            })
}

module.exports = {fetchTodo}