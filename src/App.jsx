import { Routes, Route, Link } from "react-router-dom";
import AnaSayfa from "./components/AnaSayfa";
import LastStage from "./components/LastStage";
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <div>
      {/* Basit bir navigasyon menüsü */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Ana Sayfa</Link>
        <Link to="/orderFormSonuc" style={{ marginRight: "10px" }}>Order Form</Link>
        <Link to="/lastStage">Last Stage</Link>
      </nav>

      {/* Route tanımlamaları */}
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/anaSayfa" element={<AnaSayfa />} /> {/* /anaSayfa URL’si için */}
        <Route path="/orderFormSonuc" element={<OrderForm />} />
        <Route path="/lastStage" element={<LastStage />} />
      </Routes>
    </div>
  );
}

export default App;
