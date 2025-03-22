import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [ numberAllowed, setNumberAllowed ] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [ password, setPassword ] = useState('')

  return (
    <div className='w-full max-w-md mx-auto shadow-md'>
     <h1 className='text-white text-center bg-red-400'>Password Generator</h1>
    </div>
  )
}

export default App
