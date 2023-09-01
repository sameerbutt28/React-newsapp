import React, { Component } from 'react'
import './newsItem.css'

export class newsItem extends Component {
  

  
  render() {
    let {title, description, url, imageUrl} = this.props;
    return (
    
      <div className='card-container'>
        
        <div className='card' >
  <img src={imageUrl} alt="..." height= '160px' width='300px'/>
  <div  className='card-data'>
    <h3 className="card-title">{title}</h3>
    <p className="card-text">{description}</p>
    <br></br>
    <a className='button' href={url? url: 'https://www.macrumors.com/2023/08/31/apple-discontinues-itunes-movie-trailers-app/'} target='_blank'> Read more</a>

  </div>
</div>

      </div>
    )
  }
}

export default newsItem
