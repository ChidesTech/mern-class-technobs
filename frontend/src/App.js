
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddProductPage from "./pages/AddProductPage";
import AdminProductsPage from "./pages/AdminProductsPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";




function App() {
  return <BrowserRouter>
    <Header></Header>
    <div style={{ minHeight: "60rem" }}>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        <Route path="/cart" element={<CartPage></CartPage>} />
        <Route path="/admin-products" element={<AdminProductsPage/>} />
        <Route path="/add-product" element={<AddProductPage/>} />
        <Route path="/edit-product/:id" element={<EditProductPage/>} />

      </Routes>
    </div>

    <Footer></Footer>
  </BrowserRouter>


}


export default App;