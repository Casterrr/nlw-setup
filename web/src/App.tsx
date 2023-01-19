import { useState } from 'react'

import { Habit } from './components/Habit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Habit completed={10}/>
      <Habit completed={9}/>
      <Habit completed={8}/>
      <Habit completed={7}/>
      <Habit completed={6}/>
      <Habit completed={5}/>
    </div>
  )
}

export default App
