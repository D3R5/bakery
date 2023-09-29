import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from "./components/index/Index";
import About from "./components/about/About";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Error from "./components/error/Error";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  
  </>;
}

export default App;
