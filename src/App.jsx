import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FaqPage } from "./pages/FaqPage";
import PrivateLabelingPage from "./pages/PrivateLebel";
import { Gallery } from "./pages/Galary";
import ScrollToTop from "./components/atoms/ScrollToTop";
import { useEffect } from "react";
import trackVisit from "./utills/tracker";
import PDetails from "./pages/product-details/PDetails";
import { WhatsAppButton } from "./components/atoms/WhatsAppButton";
import { Terms } from "./pages/Terms";

function App() {
   useEffect(() => {
    trackVisit(); // fires once on load
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppButton />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/private-label" element={<PrivateLabelingPage />} />
          <Route path="/workspace-images" element={<Gallery />} />
          <Route path="/product-details/:id" element={<PDetails />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
