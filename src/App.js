import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom"
import "./App.scss"
import Contact from "./Pages/Contact";
import Thanks from "./Pages/Thanks";
import Terminos from "./Pages/Terminos";
import Privacidad from "./Pages/Privacidad";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/gracias" element={<Thanks />} />
      <Route path="/politica-de-privacidad" element={<Privacidad />} />
      <Route path="/terminos-y-condiciones" element={<Terminos />} />
    </ Routes>
  );
}

export default App;
