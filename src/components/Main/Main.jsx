import { useCustomCursor } from "../../hooks/useCustomCursor";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일 import

function Main() {
  useCustomCursor();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // AOS 초기화
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간
      once: true, // 애니메이션을 한 번만 실행
    });

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <div className='wrap'>
        <div className='hero-section'>
          <video autoPlay loop muted>
            <source src='/video/main.mp4' type='video/mp4' />
          </video>
          <div className='about-text hover-target' aria-label='About Cy' data-aos="fade-right">
            about
          </div>
          <div className='contact-text hover-target' aria-label='Contact Cy' data-aos="fade-left">
            contact
          </div>
          <div className='section-center'>
            <div className='container-fluid'>
              <div className='row justify-content-center'>
                <div className='col-12 text-center mb-5' data-aos="fade-down">
                  <h1>Cy's Web Portfolio</h1>
                </div>
                <div className='col-12 text-center mb-2' data-aos="fade-up" data-aos-delay="200">
                  <div className='dancing'>Creative Web Publisher & FrontEnd</div>
                </div>
                <div className='col-12 text-center mt-4 mt-lg-5' data-aos="zoom-in" data-aos-delay="400">
                  <p>
                    <span className='portfolio hover-target' aria-label="View Cy's portfolio">
                      portfolio
                    </span>
                    <span className='history hover-target' aria-label="View Cy's skill inventory">
                      Skill Inventory
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isMobile && (
        <>
          <div className='cursor' id='cursor'></div>
          <div className='cursor2' id='cursor2'></div>
          <div className='cursor3' id='cursor3'></div>
        </>
      )}
    </>
  );
}

export default Main;