import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home/Home";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
