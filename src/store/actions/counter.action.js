export const increaseCounterAction = (payload) => {

    return {
        type: 'INCREASE',
        payload: payload
    }

}

export const EmptyAction = () => {
    return {
        type : 'EMPTY'
    }
}