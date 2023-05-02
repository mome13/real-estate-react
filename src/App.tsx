import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/scenes/home";
import AboutUs from "@/scenes/aboutUs";
import Search from "@/scenes/search/search";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
