import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";
import AddressForm from "./components/AddressForm";
import OrderPlaced from "./components/OrderPlaced";
import { CartProvider } from "./contexts/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/address" element={<AddressForm />} />
            <Route path="/order" element={<OrderPlaced />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;