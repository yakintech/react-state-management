import React from 'react'
import { FavoriteProvider } from './contextSample/FavoriteProductsContext'
import ProductHeader from './contextSample/ProductHeader'
import ProductPage from './contextSample/ProductPage'

function App() {



  return (<>
    <FavoriteProvider>
      <ProductHeader />
      <ProductPage />
    </FavoriteProvider>
  </>

  )
}

export default App