import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import OrderForm from './components/OrderForm'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import AnaSayfa from './components/AnaSayfa'

function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={AnaSayfa} />
        <Route path="/siparis-olustur" component={OrderForm} />
      </Switch>
    </div>
  )
}

export default App
