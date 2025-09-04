import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Auth from './components/Auth'
import New from './components/New'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import ProtectedRoutes from './components/ProtectedRoutes'
import Edit from './components/Edit'
// import AiTodoCreator from './components/AiTodoCreator'

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit/:id' element={<Edit/>}/>
          {/* <Route path='/ai-todo' element={<AiTodoCreator />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
