import React from "react";

const Card = ({ data }) => {
  return (
    <li className={`brand-card-${data.id} aos-init`}>
      <a href={data.link} target="_blank" className="pf-card">
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
            <div className='title'>Overview</div>
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
          <h1 className='card-title'>{data.title}</h1>
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
