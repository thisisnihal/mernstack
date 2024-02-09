import { useState } from 'react'
import { Card } from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>Click Me</h1>
      <Card username="Nihal" btnText="Sign In" />
    </>
  )
}

export default App
