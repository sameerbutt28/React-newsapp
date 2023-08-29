import React, { Component } from 'react'
import './newsItem.css'

export class newsItem extends Component {
  

  
  render() {
    let {title, description, url} = this.props;
    return (
    
      <div className='card-container'>
        
        <div className='card' >
  <img src={url} alt="..." height= '160px' width='300px'/>
  <div >
    <h3 className="card-title">{title}</h3>
    <p className="card-text">{description}</p>
    <button>  </button>
  </div>
</div>

      </div>
    )
  }
}

export default newsItem
