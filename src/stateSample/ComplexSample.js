import React from 'react'

function ComplexSample() {

    const [nameValue, setnameValue] = useState('')
    const [surnameValue, setsurnameValue] = useState('')



    let user = {
        name: nameValue,
        surname: surnameValue
    }

  return (
    <div>


    <input type='text' value={nameValue} onChange={(e) => setnameValue(e.target.value)}/>


    <input type='text' value={surnameValue} onChange={(e) => setsurnameValue(e.target.value)}/>



    </div>
  )
}

export default ComplexSample