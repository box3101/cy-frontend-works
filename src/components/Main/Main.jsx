import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className='wrap'>
        <div className='hero-section'>
          <video autoPlay loop muted>
            <source src='/video/main.mp4' type='video/mp4' />
          </video>
          <Link to='/about' className='about-text hover-target' aria-label='About Cy' data-aos='fade-right'>
            About
          </Link>
          <div className='contact-text hover-target' aria-label='Contact Cy' data-aos='fade-left'>
            contact
          </div>
          <div className='section-center'>
            <div className='container-fluid'>
              <div className='row justify-content-center'>
                <div className='col-12 text-center mb-5' data-aos='fade-down'>
                  <h1>Cy's Code Canvas</h1>
                </div>
                <div className='col-12 text-center mb-2' data-aos='fade-up' data-aos-delay='200'>
                  <div className='dancing'>Creative Web Publisher & FrontEnd</div>
                </div>
                <div className='col-12 text-center mt-4 mt-lg-5' data-aos='zoom-in' data-aos-delay='400'>
                  <p>
                    <Link to ='/skill' className='history hover-target' aria-label="View Cy's skill inventory">
                      <span>Skill Inventory</span>
                    </Link>
                    <span className='portfolio hover-target' aria-label="View Cy's portfolio">
                      portfolio
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
