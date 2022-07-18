export const counterReducer = (state, action) => {
    if (!state) {
        state = 0;
    }
    if (action.type == 'INCREASE') {
        return state + 1
    }
    else if (action.type == 'DECREASE') {
        return state - 1
    }
    else {
        return state
    }
}