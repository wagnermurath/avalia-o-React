import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalhesAsteroides from "./DetalhesAsteroides";
import Sobremim from "./SobreMim.jsx";
import PaginaInicial from "./paginaIncial.jsx";
import MeuMenu from "./MeuMenu.jsx";
import Footer from "./assets/Footer.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MeuMenu />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/asteroide/:id" element={<DetalhesAsteroides />} />
        <Route path="/SobreMim" element={<Sobremim />} />
      </Routes> 
           <Footer />
    </BrowserRouter>
  </React.StrictMode>

);