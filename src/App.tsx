import Home from "@/scenes/home";
import AboutUs from "@/scenes/aboutUs";
import Search from "@/scenes/search/search";
import SignUp from "./scenes/signUp";
import { Routes, Route } from "react-router-dom";
import SignIn from "./scenes/signIn";
import Property from "./scenes/property";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import UserInfoContext from "./contexts/userInfo.context";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
function App() {
  const [userInfo, setUserInfo] = useState(
    (() => {
      const item = localStorage.getItem("userInfo");
      if (item) {
        try {
          return JSON.parse(item);
        } catch {
          return {};
        }
      }
      return {};
    })()
  );

  useEffect(() => {
    if (userInfo) {
      const rawValue = JSON.stringify(userInfo);
      localStorage.setItem("userInfo", rawValue);
    } else {
      localStorage.removeItem("userInfo");
    }
  }, [userInfo]);
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event: any) {
    if (
      !event.target?.matches(".dropbtn") &&
      !event.target?.closest(".dropdown-content")
    ) {
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
      <QueryClientProvider client={queryClient}>
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="search" element={<Search />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="property/:propertyId" element={<Property />} />
          </Routes>
        </UserInfoContext.Provider>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
