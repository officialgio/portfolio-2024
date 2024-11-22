import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import { AnimatePresence } from "framer-motion";
import { About } from "./components/About/about.component";

function App() {
  const location = useLocation();

  /**
   * Initialize Smooth Scroll Animations
   */
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div data-scroll-container>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
