
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product'
import ProductList from './pages/ProductList';
import HomePage from './pages/HomePage'
import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="products/:category" element={<ProductList />} />
      <Route path="product/:id" element={<Product/>} />
      <Route path="cart" element={<Cart/>} />
      <Route path="login" element={<Login/>} />
      <Route path="register" element={<Register/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
