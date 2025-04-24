import { useState } from 'react'
import './App.css'
import { Button } from "@arco-design/web-react";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button type="primary" onClick={() => setCount((count: number) => count + 1)}>click button count++: {count} </Button>
    </>
  )
}

export default App
