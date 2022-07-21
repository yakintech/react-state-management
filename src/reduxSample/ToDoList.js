import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosApiRequest } from '../store/actions/thunkActions';
import { getTodosApiAction, removeAllToDoAction, removeToDoAction } from '../store/actions/todo.action';

function ToDoList() {

    //redux içerisinde bulunan GLOBAL STATE e erişmek için useSelector HOOK unu kullanıyoruz

    let todos = useSelector(state => state.todoreducer);

    let dispatch = useDispatch();

    useEffect(() => {
      
        dispatch(getTodosApiRequest())

    }, [])
    

    const deleteToDo = (item) => {

        // dispatch({ type: 'REMOVE_TODO', payload: item })
        dispatch(removeToDoAction(item))

    }

    const removeAll = () => {

        // dispatch({ type: 'REMOVE_ALL_TODO' })

        dispatch(removeAllToDoAction())

    }

    return (
        <>
            <h1>Count: {todos.length}</h1>
            <button onClick={() => removeAll()}>Remove All</button>
            <ul>
                {
                    todos && todos.map((item, key) => {
                        return <>
                            <li id={item.id}>{item.title}</li>
                            <button onClick={() => deleteToDo(item)}>Delete ToDo</button>
                        </>
                    })
                }
            </ul>
        </>
    )

}

export default ToDoList