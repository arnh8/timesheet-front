import { useState } from 'react'
import './App.css'
import Calendar from './modules/Calendar' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calendar year={2023} month={7}/>
    </div>
  )
}

export default App
