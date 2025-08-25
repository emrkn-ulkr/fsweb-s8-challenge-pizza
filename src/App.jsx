import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import OrderForm from './components/OrderForm'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import AnaSayfa from './components/AnaSayfa'
import LastStage from './components/LastStage'

// linkler
// <Link to="/">Anasayfa</Link>-  <Link to="/lastStage">Seçenekler</Link>- <Link to="/orderFormSonuc">Sipariş Oluştur</Link>


function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={AnaSayfa} />
        <Route exact path="/orderFormSonuc" component={OrderForm} />
        <Route exact path="/lastStage" component={LastStage} />
      </Switch>
    </div>
  )
}

export default App
