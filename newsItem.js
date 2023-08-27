import React, { Component } from 'react'
import './newsItem.css'

export class newsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
    
      <div className='card-container'>
        
        <div className='card' >
  <img src="..." alt="..."/>
  <div >
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <button> Go somewhere </button>
  </div>
</div>

      </div>
    )
  }
}

export default newsItem
