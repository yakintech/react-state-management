import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { EmptyAction, increaseCounterAction } from '../store/actions/counter.action'

function CounterOperation() {

    const [number, setnumber] = useState(0)

    //useSelect => Mevcut state çeker ve o componentin STORE a abone olmasını sağlar.
    //useDispatch => Componentten reducer a bir action fırlatmamızı sağlar.

    const dispatch = useDispatch()

    const increase = () => {
        dispatch(increaseCounterAction(Number(number)))
    }

    const decrease = () => {
        dispatch({ type: 'DECREASE', payload: Number(number) })
    }


    const empty = () => {
        dispatch(EmptyAction())
    }

    return (
        <div>
            <div>
                <label>Number: </label>
                <input type='text' value={number} onChange={(e) => setnumber(e.target.value)} />
            </div>
            <div>
                <button onClick={() => increase()}> + </button>
                <button onClick={() => decrease()}> - </button>
            </div>
            <div>
                <button onClick={() => empty()}>Empty</button>
            </div>
        </div>
    )
}

export default CounterOperation