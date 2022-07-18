export const counterReducer = (state, action) => {
    if (!state) {
        state = 0;
    }
    if (action.type == 'INCREASE') {
        return state + action.payload
    }
    else if (action.type == 'DECREASE') {
        return state - action.payload
    }
    else if(action.type == 'EMPTY'){
        return 0
    }
    else {
        return state
    }
}