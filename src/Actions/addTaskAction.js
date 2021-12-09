export const addTaskAction = (todos) => {
    return {
        type: "ADD_TASK",
        payload: todos
    }
}

export const isClosedAction = (isClosed) => {
    return {
        type: "IS_CLOSED",
        payload: !isClosed
    }
}

export const clearAllAction = (clearAll) => {
    return {
        type: "CLEAR_ALL",
        payload: clearAll
    }
}

export const removeTask = (index) => {
    return {
        type: "REMOVE_TASK",
        payload: index
    }
}