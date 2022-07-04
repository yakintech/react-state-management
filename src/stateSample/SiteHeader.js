import React from 'react'

function SiteHeader({getCategories}) {




  return (
    <h1>{getCategories.length}</h1>
  )
}

export default SiteHeader