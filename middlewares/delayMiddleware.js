const fetch = require('node-fetch')

const delayMiddleware = store => next => action => {
   if(action.type === 'todo/ADD_TODO') {
       setTimeout(() => {
           next(action)
       }, 5000)
       return
   }
   return next(action)
}

const fetchMiddleware = store => next => async action => {
    if(action.type === 'todo/FETCH_TODO') {
         const myTodos = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
         const todos = await myTodos.json()

         store.dispatch({
                type: 'todo/LOAD_TODO',
                payload: todos
            })
            return
    }
    return next(action)
}

module.exports = {delayMiddleware, fetchMiddleware}