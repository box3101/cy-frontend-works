import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      easing: "ease-in-out", // 애니메
      duration: 1000, // 애니메이션 지속 시간
      once: true // 애니메이션을 한 번만 실행
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
      </Routes>
    </Router>
  );
}

export default App;
