import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { FavoriteProvider } from './contextSample/FavoriteProductsContext'
import ProductHeader from './contextSample/ProductHeader'
import ProductPage from './contextSample/ProductPage'
import AddToDo from './reduxSample/AddToDo'
import CounterHeader from './reduxSample/CounterHeader'
import CounterOperation from './reduxSample/CounterOperation'
import ToDoList from './reduxSample/ToDoList'
import { counterReducer } from './store/reducers/counter.reducer'
import { todoreducer } from './store/reducers/todo.reducer'
import mainReducer from './store/reducers/index'
import { loggerMiddleware } from './store/middleware/loggerMiddleware'
import thunk from 'redux-thunk'
import { getTodosApiRequest } from './store/actions/thunkActions'

function App() {

  // var counterStore = createStore(counterReducer)
  //var todoStore = createStore(todoreducer)

  // const middleware = applyMiddleware(loggerMiddleware);
  // var store = createStore(mainReducer, middleware)


  var store = createStore(mainReducer, applyMiddleware(thunk))

  return (<>

    <Provider store={store}>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/todos">Todo List</Link>
        <Link to="/addtodo">Add ToDo</Link>
        <Link to="/counterheader">Counter</Link>
        <Link to="/counteroperation">Counter Operation</Link>
      </nav>


      <Routes>
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/addtodo" element={<AddToDo />} />
        <Route path="/counterheader" element={<CounterHeader />} />
        <Route path="/counteroperation" element={<CounterOperation />} />


      </Routes>

    </Provider>



    {/* <FavoriteProvider>
      <ProductHeader />
      <ProductPage />
    </FavoriteProvider> */}
  </>

  )
}

export default App