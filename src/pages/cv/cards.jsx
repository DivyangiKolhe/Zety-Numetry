import React from 'react';
import templates from '../../image-data';
import './cv.css'


const Cards = () => {
  return (
    
    <div className="card-container">
      {templates.map((template, index) => (
        <div key={index} className="card">
          <div className="img">
            <img src={template.src} alt={template.alt} className="card-image" />
          </div>
          <div className="temp-btn">
            <button>Use this Template</button>
          </div>
          <div className="card-content">
            <p className="card-title">{template.title}</p>
            <p className="card-description">{template.description}</p>
          </div>
          
        </div>
      ))}
    </div>
    
  );
};

export default Cards;
