import React from 'react'
import "./article.css"
import icon from "/src/assets/location-icon.png";

const Article = (props) => {
  return (
    <div className='article'>
      <div className='article-content'>
        <img className="article-img" src={props.item.img} alt={props.item.title} />
        <div className='article-main'>
          <img className="location-icon" src={icon} alt="location-icon" /> 
          <div className='location-title'>{props.item.location}</div>
          <a className='location-link'>View on Google Maps</a> 
          <div className='article-title'>
             <h1>{props.item.title}</h1>
          </div>
          <div className='article-date'>{props.item.date}</div>
          <div className='article-text'>{props.item.text}</div>
        </div>
       
      </div>
      
      <hr />
    </div>
  )
}

export default Article