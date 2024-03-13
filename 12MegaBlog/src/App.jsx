import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import Header from './components/Header.jsx/Header'
import Footer from './components/Footer.jsx/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  console.log("hello")
  console.log(import.meta.env.VITE_APPWRITE_URL)
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}));
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false)) // always keep things like 'loading' in finally
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
 
}

export default App
