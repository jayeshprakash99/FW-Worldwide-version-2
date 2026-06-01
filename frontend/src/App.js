import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/layouts/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Carriers from "@/pages/Carriers";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/carriers" element={<Carriers />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
