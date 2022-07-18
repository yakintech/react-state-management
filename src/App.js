import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { FavoriteProvider } from './contextSample/FavoriteProductsContext'
import ProductHeader from './contextSample/ProductHeader'
import ProductPage from './contextSample/ProductPage'
import CounterHeader from './reduxSample/CounterHeader'
import CounterOperation from './reduxSample/CounterOperation'
import { counterReducer } from './store/reducers/counter.reducer'

function App() {

  var counterStore = createStore(counterReducer)

  return (<>

    <Provider store={counterStore}>

      <CounterHeader />
      <CounterOperation />

    </Provider>



    {/* <FavoriteProvider>
      <ProductHeader />
      <ProductPage />
    </FavoriteProvider> */}
  </>

  )
}

export default App