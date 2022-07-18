import React from 'react'
import { useSelector } from 'react-redux'

function CounterHeader() {

    //Bu component redux üzerindeki state ten counter sayısını çekip yazacak.
    const counter = useSelector(state => state)

    return (
        <div>Counter: {counter} </div>
    )
}

export default CounterHeader