import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
