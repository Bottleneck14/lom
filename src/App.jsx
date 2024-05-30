import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portofolio from "./pages/Portofolio";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/lom/" element={<Home />}></Route>
        <Route path="/lom/services" element={<Services />}></Route>
        <Route path="/lom/portofolio" element={<Portofolio />}></Route>
        <Route path="/lom/pricing" element={<Pricing />}></Route>
        <Route path="/lom/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
