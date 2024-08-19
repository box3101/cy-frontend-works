import Main from "../components/Main/Main";
import { motion } from "framer-motion";
import { useCustomCursor } from "../hooks/useCustomCursor";
import { useEffect, useState } from "react";
const Home = () => {
  useCustomCursor();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        <Main />
      </motion.div>
      {!isMobile && (
        <>
          <div className='cursor' id='cursor'></div>
          <div className='cursor2' id='cursor2'></div>
          <div className='cursor3' id='cursor3'></div>
        </>
      )}
    </>
  );
};

export default Home;
