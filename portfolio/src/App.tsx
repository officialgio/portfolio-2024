import React, { useEffect, useState } from "react";
import "./App.scss";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./routes/home/home.component";
import { AnimatePresence } from "framer-motion";
import { About } from "./components/About/about.component";
import LoadingScreen from "./components/LoadingScreen/loading-screen.component";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Smooth Scroll Animations
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();

      // loading screen
      setTimeout(() => {
        setIsLoading(false);
        locomotiveScroll.start();
      }, 3000);
    })();
  }, [isLoading]);

  // Defined Routes Here
  return (
    <>
      {isLoading && <LoadingScreen />} {/* Show Loading Screen */}
      {!isLoading && (
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
      )}
    </>
  );
}

export default App;
