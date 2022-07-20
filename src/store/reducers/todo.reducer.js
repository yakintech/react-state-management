export const todoreducer = (state = [], action = {}) => {

    if (!state) {
        state = []
    }

    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]

        case "REMOVE_TODO":
            state = state.filter(q => q.id != action.payload.id)
            return state

        case "REMOVE_ALL_TODO":
            return []

        default:
            return state
    }


}