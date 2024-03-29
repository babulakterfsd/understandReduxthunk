const {createStore, applyMiddleware} = require('redux')
const {delayMiddleware } = require('./middlewares/delayMiddleware')
const thunk = require('redux-thunk')
const {fetchTodo} = require('./utils/fetchTodo')


const initialState = {
    todos: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todo/ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

            case 'todo/LOAD_TODO':
                return {
                    ...state,
                    todos: [...state.todos, ...action.payload]
                }

        default:
            return state
    }
}

const store = createStore(todoReducer, applyMiddleware(thunk.default, delayMiddleware))

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({
    type: 'todo/ADD_TODO',
    payload: 'Learn Redux'
})
store.dispatch(fetchTodo)