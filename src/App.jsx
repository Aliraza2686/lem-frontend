import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FaqPage } from "./pages/FaqPage";
import PrivateLabelingPage from "./pages/PrivateLebel";
import { Gallery } from "./pages/Galary";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/private-label" element={<PrivateLabelingPage />} />
          <Route path="/workspace-images" element={<Gallery />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
