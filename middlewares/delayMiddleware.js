const delayMiddleware = store => next => action => {
   if(action.type === 'todo/ADD_TODO') {
       setTimeout(() => {
           next(action)
       }, 5000)
       return
   }
   return next(action)
}

// const fetchMiddleware = store => next => async action => {
//     if(action.type === 'todo/FETCH_TODO') {
//          const myTodos = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//          const todos = await myTodos.json()

//          store.dispatch({
//                 type: 'todo/LOAD_TODO',
//                 payload: todos
//             })
//             return
//     }
//     return next(action)
// }

// etai ashole thunk function vitre vitre ja kore. ekhn comment kore rekhe redux-thunk package use kore kaj kortesi, but vitore vitore thunk etai kore. maane action ta jodi kono function hoy, tahole tar vitore dispatch ar state ta diye action orthat oi functon ta ke call kore dey.

// const fetchAsyncMiddleware = store => next => action => {
//     if(typeof action === 'function') {
//         return action(store.dispatch, store.getState)
//     }
//     return next(action)
// }

module.exports = {delayMiddleware}