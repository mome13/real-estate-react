import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/scenes/home";
import AboutUs from "@/scenes/aboutUs";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <AboutUs/> } />
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
