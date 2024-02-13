import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
// import UserContextProvider from './context/UserContextProvider'
import { UserContextProvider } from './context/UserContext'

function App() {

  return (
    <UserContextProvider>
      <h1>Hello world</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
