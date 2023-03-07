import { useState } from 'react'
import {Routes,  Route, BrowserRouter} from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar.component'
import LoginPage from './pages/Login';
import LoginButton from './components/LogoutButton/LogoutButton.component';
import DashboardPage from './pages/Dashboard';

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          {/* <Route path="/logout" element={<LoginPage/>}/> */}
          <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
