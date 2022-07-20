import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function AddToDo() {

    const [name, setName] = useState('');

    //usedispatch hooku ile redux üzerindeki global statei değiştiriyorun. Bunun için reducer a erişiyorum...

    let dispatch = useDispatch();


    const addNewTodo = () => {

        var randomId = Math.floor(Math.random() * 1000);

        let newTodo = {
            id: randomId,
            name: name,
            isCompleted: false
        }

        dispatch({ type: 'ADD_TODO', payload: newTodo })

    }



    return (
        <>
            <div>
                <label>New ToDo</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
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