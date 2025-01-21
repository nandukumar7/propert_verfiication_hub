import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from'./pages/home';
import About from'./pages/about';
import Signin from './pages/signin';
import Sinout from './pages/sinout';
import Profile from './pages/profile';
import Header from './components/Header';
const App = () => {
  return (
 <BrowserRouter>
 <Header />
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/Signin' element={<Signin/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/Signup' element={<Sinout/>}/>
 </Routes>
 </BrowserRouter>
  )
}

export default App
