import './App.css';
import About from './components/About.js';
// import Home from './components/HomePage/Home.js';
import Navbar from './components/Navbar/Navbar.js';
import Services from './components/Services.js';
import Career from './components/Career.js';
import Contact from './components/Contact.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="div">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Career" element={<Career />} />
          </Routes>
        </div>
        <Footer/>
      </Router >
    </>
  );
}

export default App;
