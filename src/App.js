import React from 'react'
import { Provider } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import { FavoriteProvider } from './contextSample/FavoriteProductsContext'
import ProductHeader from './contextSample/ProductHeader'
import ProductPage from './contextSample/ProductPage'
import AddToDo from './reduxSample/AddToDo'
import CounterHeader from './reduxSample/CounterHeader'
import CounterOperation from './reduxSample/CounterOperation'
import ToDoList from './reduxSample/ToDoList'
import { counterReducer } from './store/reducers/counter.reducer'
import { todoreducer } from './store/reducers/todo.reducer'

function App() {

  // var counterStore = createStore(counterReducer)

  var todoStore = createStore(todoreducer)

  return (<>

    <Provider store={todoStore}>
      <nav>
        <Link to="/todos">Todo List</Link>
        <Link to="/addtodo">Add ToDo</Link>
      </nav>


      <Routes>
        <Route path="/todos" element={<ToDoList />} />
        <Route path="/addtodo" element={<AddToDo />} />
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