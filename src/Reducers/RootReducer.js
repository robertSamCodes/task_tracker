const stateStore = {
    todos: [],
    isClosed: true,
    clearAllTodos: []
}


const RootReducer = (state = stateStore, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "IS_CLOSED":
            return {
                ...state,
                isClosed: !state.isClosed
            }
        case "CLEAR_ALL":
            return {
                ...state,
                todos: []
            }
        default:
            return state
    }
}

export default RootReducer


