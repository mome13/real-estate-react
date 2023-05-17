import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/scenes/home";
import AboutUs from "@/scenes/aboutUs";
import Search from "@/scenes/search/search";
import { Routes, Route } from "react-router-dom";

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
function App() {
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event: any) {
    if (!event.target?.matches(".dropbtn") && !event.target?.closest(".dropdown-content")) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (!openDropdown.classList.contains("hidden")) {
          openDropdown.classList.add("hidden");
        }
      }
    }
  };
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
