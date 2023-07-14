import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarHeader from "./Components/Navbar";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <NavbarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;