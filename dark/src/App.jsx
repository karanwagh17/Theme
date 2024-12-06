import { useState } from 'react'
import Navbar from './Components/navbar'
import Content from './Components/Content'
import Button from './Components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainsec'>
    <Navbar/>
    <Content/>
    <Button/>
      
    </div>
  )
}

export default App
