import Navbar from "./komponen/Navbar";
import Home from "./komponen/Home";
import About from "./komponen/About";
import Footer from "./komponen/Footer";
import Contact from "./komponen/Contact";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
