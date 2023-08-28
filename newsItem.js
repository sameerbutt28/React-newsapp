import React, { Component } from 'react'
import './newsItem.css'

export class newsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
    
      <div className='card-container'>
        
        <div className='card' >
  <img src="https://images.wsj.net/im-842273/social" alt="..." height= '100px'/>
  <div >
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <button> Read more </button>
  </div>
</div>

      </div>
    )
  }
}

export default newsItem
