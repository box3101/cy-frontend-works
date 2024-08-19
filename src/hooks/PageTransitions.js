export function PageTransitions() {
  const toggleClass = (className) => {
    document.body.classList.toggle(className);
  };

  return (
    <>
      <div className="about-text" onClick={() => toggleClass('about-on')}>About</div>
      <div className="about-close" onClick={() => toggleClass('about-on')}>Close</div>

      <div className="contact-text" onClick={() => toggleClass('contact-on')}>Contact</div>
      <div className="contact-close" onClick={() => toggleClass('contact-on')}>Close</div>

      <div className="portfolio" onClick={() => toggleClass('portfolio-on')}>Portfolio</div>
      <div className="portfolio-close" onClick={() => toggleClass('portfolio-on')}>Close</div>

      <div className="history" onClick={() => toggleClass('history-on')}>History</div>
      <div className="history-close" onClick={() => toggleClass('history-on')}>Close</div>
    </>
  );
}