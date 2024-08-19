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
      <div className='about-section'>
        <Link to='/' className='about-close hover-target'></Link>
        <div className='section-center'>
          <div className='container w1600'>
            <div className='row justify-content-center'>
              <div className='col-12 text-center'>
                <img src='/images/profile.jpg' alt='프로필 사진' />
              </div>
              <div className='col-12 text-center mt-4 full-width'>
                <h2>이름: 이찬용</h2>
                <p className='description'>
                  UI개발자는 기획자, 디자이너 ,BackEnd 개발자와의 소통이 매우 중요합니다. <br />
                  "대인관계 속 사람들과 의사소통이 원활하게 될 수 있는 점이 저의 가장 큰 장점입니다."
                </p>
                <p>학력: 동국대학교(WISE) 컴퓨터공학과</p>
                <p>생년월일: 1991년 02월 28일</p>
                <p>거주지: 인천광역시 부평구</p>
                <p>전화번호: 010-2280-0826</p>
                <p>이메일: box4101@nate.com</p>
                <p>기술: HTML5, CSS3, JavaScript (ES6+) , React, Vue, Astro, CSS, SCSS, SASS, JavaScript, jQuery, GIT, GULP, Vuetify, AntDesign</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
