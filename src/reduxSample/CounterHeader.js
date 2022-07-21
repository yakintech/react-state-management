import React from 'react'
import { useSelector, useStore } from 'react-redux'

function CounterHeader() {

    //Bu component redux üzerindeki state ten counter sayısını çekip yazacak.
    const counter = useSelector(state => state.counterReducer);

    const store = useStore()
    console.log('STORE', store.getState());

    return (
        <>
            <div>Counter -  With UserStore : {store.getState().counterReducer}</div>
            <div>Counter: {counter} </div>
        </>
    )
}

export default CounterHeader