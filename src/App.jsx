import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cart, ElectronicProducts, Home, JeweleryProducts, MensProducts, ProductDetail, WomensProducts } from "./pages";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men-clothing" element={<MensProducts />} />
        <Route path="/women-clothing" element={<WomensProducts />} />
        <Route path="/jewelery" element={<JeweleryProducts />} />
        <Route path="/electronics" element={<ElectronicProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<ProductDetail/>} />
      </Routes>
    </Router>
  )
}

export default App
