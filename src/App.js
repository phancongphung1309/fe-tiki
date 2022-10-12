import React from 'react'
import logo from './logo.svg';
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-page" element={<ProductPage />} />
        <Route path="/product-page/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  )
}

export default App