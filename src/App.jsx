import { Routes, Route, Link } from "react-router-dom";
import AnaSayfa from "./components/AnaSayfa";
import LastStage from "./components/LastStage";
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <div>
      {/* Basit bir navigasyon menüsü */}


      {/* Route tanımlamaları */}
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/orderForm" element={<OrderForm />} />
        <Route path="/lastStage" element={<LastStage />} />
      </Routes>
    </div>
  );
}

export default App;
