import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./App.css";

function App() {
  const [showHero, setShowHero] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3500);
    const hideTimer = setTimeout(() => setShowHero(false), 4000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {showHero ? (
        <div className="fade-in">
          <Hero fadeOut={fadeOut} />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="navbar-spacer" />
          <section id="home" aria-label="Home Section">
            <Home />
          </section>
        </>
      )}
    </>
  );
}

export default App;
