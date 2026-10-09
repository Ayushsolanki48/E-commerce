
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Shop from "./pages/shop";
import ShopCategory from "./pages/shopcategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />

        <Route
          path="/mens"
          element={<ShopCategory category="mens" />}
        />

        <Route
          path="/womens"
          element={<ShopCategory category="womens" />}
        />

        <Route
          path="/kids"
          element={<ShopCategory category="kids" />}
        />

        <Route path="/product/:productId" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;