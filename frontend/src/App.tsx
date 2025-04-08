import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/NavBar/NavBar'
import Home from './components/HomePage/Home'
import About from './components/Pages/About/About'
import Services from './components/Pages/Services/Services'
import Contact from './components/Pages/Contact/Contact'
import Login from './components/Pages/auth/Login'
import Register from './components/Pages/auth/Register'
import Dashboard from './components/Pages/Dashboard/Dashboard'
import ProtectedRoute from './components/Rotues/ProtectedRoute'

function App() {


  return (
    <>
    <Navbar/>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/auth/login" element={<Login/>} />
          <Route path="/auth/register" element={<Register/>} />
          <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        </Routes>
    </>
  )
}

export default App
