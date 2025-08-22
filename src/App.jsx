import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import OrderForm from './components/OrderForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <OrderForm />
    </div>
  )
}

export default App
