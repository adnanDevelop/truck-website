import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navFooter/Navbar";
import Home from "./component/page/Home";
import About from "./component/page/About";
import Contact from "./component/page/Contact";
import Footer from "./component/navFooter/Footer";

function App() {
  return (
    <div className="App text-green-500">
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
