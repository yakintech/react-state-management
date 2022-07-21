import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToDoAction } from '../store/actions/todo.action';

function AddToDo() {

    const [title, setTitle] = useState('');

    //usedispatch hooku ile redux üzerindeki global statei değiştiriyorun. Bunun için reducer a erişiyorum...

    let dispatch = useDispatch();


    const addNewTodo = () => {

        var randomId = Math.floor(Math.random() * 1000);

        let newTodo = {
            id: randomId,
            title: title,
            isCompleted: false
        }

        // dispatch({ type: 'ADD_TODO', payload: newTodo })
        dispatch(addToDoAction(newTodo))

    }



    return (
        <>
            <div>
                <label>New ToDo</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addNewTodo()}>Add</button>
            </div>
        </>
    )

}

export default AddToDo

// let todos = [
//     {
//         id:3,
//         name:'Login page design',
//         isCompleted: true
//     }
// ]