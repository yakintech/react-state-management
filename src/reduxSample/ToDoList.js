import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ToDoList() {

    //redux içerisinde bulunan GLOBAL STATE e erişmek için useSelector HOOK unu kullanıyoruz

    let todos = useSelector(state => state);

    let dispatch = useDispatch();

    const deleteToDo = (item) => {

        dispatch({ type: 'REMOVE_TODO', payload: item })

    }

    const removeAll = () => {

        dispatch({type:'REMOVE_ALL_TODO'})

    }

    return (
        <>
            <h1>Count: {todos.length}</h1>
            <button onClick={() => removeAll()}>Remove All</button>
            <ul>
                {
                    todos && todos.map((item, key) => {
                        return <>
                            <li id={item.id}>{item.name}</li>
                            <button onClick={() => deleteToDo(item)}>Delete ToDo</button>
                        </>
                    })
                }
            </ul>
        </>
    )

}

export default ToDoList