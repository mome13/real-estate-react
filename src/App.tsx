import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Home from "@/scenes/home";
import AboutUs from "@/scenes/aboutUs";
import Search from "@/scenes/search/search";
import SignUp from "./scenes/signUp";
import { Routes, Route } from "react-router-dom";
import SignIn from "./scenes/signIn";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="search" element={<Search />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
