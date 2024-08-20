import React from "react";

const Card = ({ data }) => {
  // Handler for the link click event
  const handleLinkClick = (e) => {
    if (data.link === "ready") { // Specific link to trigger alert
      e.preventDefault(); // Prevent default behavior
      alert("프로젝트 준비중입니다."); // Alert message
    }
  };

  return (
    <li className={`brand-card-${data.id} aos-init`}>  
      <a href={data.link} target="_blank" className="pf-card" onClick={handleLinkClick}>  
        <div className='image-container'>
          {data.video ? (
            <video
              loop
              autoPlay
              muted
              playsInline
              disablePictureInPicture
              controlsList='nodownload'
              className='card-video'>
              <source src={data.video} type='video/mp4' />
            </video>
          ) : (
            <img src={data.image} className='card-background' alt={data.title} />
          )}  
          <div className='image-hover'>
            <div className='title' style={{ whiteSpace: 'pre-line' }}>Overview</div>
            <div className='info' style={{ whiteSpace: 'pre-line' }}>{data.info}</div>
            <div className='tag-wrap'>
              {data.tags.map((tag, index) => (
                <span key={index} className='tag'>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className='card-content'>
          <h2 className='card-subtitle'>{data.subtitle}</h2>
          <h1 className='card-title' style={{ whiteSpace: 'pre-line' }}>{data.title}</h1>
          <p className='card-description' style={{ whiteSpace: 'pre-line' }} >{data.description}</p>
        </div>
      </a>
    </li>
  );
};

const CardList = ({ cards }) => {
  return (
    <ul className='card-wrap'>
      {cards.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </ul>
  );
};

export { Card, CardList };