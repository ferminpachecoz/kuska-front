import Home from "./Pages/Home";
import {Routes, Route} from "react-router-dom"
import "./App.scss"
import Contact from "./Pages/Contact";
import Thanks from "./Pages/Thanks";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/gracias" element={<Thanks />} />
    </ Routes>
  );
}

export default App;
