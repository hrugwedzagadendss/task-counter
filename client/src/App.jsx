import { useState } from 'react'
import './App.css'
import Counter from './08-10-2025/Counter';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Task 2</h1>
      <div className="card">
        <h1>Simple Counter App</h1>
        <Counter initialValue={5} />
      </div>
    </>
  )
}

export default App
