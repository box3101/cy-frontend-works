import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "0vw",
      scale: 1,
      rotate: -10
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0
    },
    out: {
      opacity: 0,
      x: "0vw",
      scale: 1.2,
      rotate: 10
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.2
  };

  return (
    <motion.div initial='initial' animate='in' exit='out' variants={pageVariants} transition={pageTransition}>
      <div className='contact-section'>
        <Link to='/' className='contact-close hover-target'></Link>
        <div className='section-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 text-center'>
                <a href='#' className='hover-target'>
                  box401@nate.com
                </a>
              </div>
              <div className='col-12 text-center social mt-4'>
                <a href='https://www.instagram.com/vow.lee/' target='_blank' className='hover-target'>
                  instagram
                </a>
                <a href='https://www.facebook.com/chanyang.lee.779' target='_blank' className='hover-target'>
                  facebook
                </a>
                <a href='https://twitter.com/v6Ottip334hhbKg' target='_blank' className='hover-target'>
                  twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
