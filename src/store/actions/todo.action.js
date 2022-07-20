export const addToDoAction = (payload) => {
    return {
        type: 'ADD_TODO',
        payload: payload
    }
}


export const removeToDoAction = (payload) => {
    return {
        type:'REMOVE_TODO',
        payload: payload
    }
}


export const removeAllToDoAction = () => {
    return {
        type: 'REMOVE_ALL_TODO'
    }
}