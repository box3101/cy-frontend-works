import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./pages/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import BrowserWork from "./components/JavaScript/BrowerWork";
import Promise from "./components/JavaScript/Promise";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function PageContent({ children, isFirstLoad }) {
  const [visible, setVisible] = useState(isFirstLoad);

  useEffect(() => {
    if (!isFirstLoad) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  return <div className={`page-content ${visible ? "visible" : ""}`}>{children}</div>;
}

function AppContent() {
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    }
  }, [location]);

  return (
    <div className='app-container'>
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames='fade' timeout={isFirstLoad ? 0 : 2000}>
          <div className='route-section'>
            {!isFirstLoad && (
              <>
                <div className='wave wave1'></div>
                <div className='wave wave2'></div>
                <div className='wave wave3'></div>
              </>
            )}
            <Routes location={location}>
              <Route
                path='/'
                element={
                  <PageContent isFirstLoad={isFirstLoad}>
                    <Home />
                  </PageContent>
                }
              />
              <Route
                path='/about'
                element={
                  <PageContent isFirstLoad={isFirstLoad}>
                    <About />
                  </PageContent>
                }
              />
              <Route
                path='/skill'
                element={
                  <PageContent isFirstLoad={isFirstLoad}>
                    <Skill />
                  </PageContent>
                }
              />
              <Route
                path='/contact'
                element={
                  <PageContent isFirstLoad={isFirstLoad}>
                    <Contact />
                  </PageContent>
                }
              />
              <Route
                path='/portfolio'
                element={
                  <PageContent isFirstLoad={isFirstLoad}>
                    <Portfolio />
                  </PageContent>
                }
              />
              <Route
                path='/javascript/browser-work'
                element={
                  <PageContent isFirstLoad={isFirstLoad}>
                    <BrowserWork />
                  </PageContent>
                }
              />
              <Route
                path='/javascript/promise-visualization'
                element={
                  <PageContent isFirstLoad={isFirstLoad}>
                    <Promise />
                  </PageContent>
                }
              />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
