import * as React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Products } from './pages/Products/Products';
import { Contact } from './pages/Contact/Contact';
import { Services } from './pages/Services/Services';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { ProductDetails } from './pages/Products/ProductDetails';

import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
