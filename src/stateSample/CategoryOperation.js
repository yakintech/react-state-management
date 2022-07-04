import React from 'react'

function CategoryOperation({removeAll}) {


  return (
        <button onClick={() => removeAll()}>Remove All</button>
  )
}

export default CategoryOperation