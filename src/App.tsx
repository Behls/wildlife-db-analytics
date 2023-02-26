import { useState } from 'react'
import {Routes,  Route, BrowserRouter} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.component'
import LoginPage from './pages/Login';
import LoginButton from './components/LoginButton/LoginButton.component';

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
