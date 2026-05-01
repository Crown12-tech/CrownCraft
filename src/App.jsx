import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Home    from "./pages/Home";
import About   from "./pages/About";
import Store   from "./pages/Store";
import Product from "./pages/Product";
import Cart    from "./pages/Cart";

import Navbar  from "./components/Navbar";
import Footer  from "./components/Footer";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/about"        element={<About />} />
          <Route path="/store"        element={<Store />} />
          <Route path="/product/:id"  element={<Product />} />
          <Route path="/cart"         element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}