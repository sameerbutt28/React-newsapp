import React, { Component } from 'react'
import NewsItem from './newsItem'
import './News.css'
export class News extends Component {
  render() {
    return (
      <div>
        <h1>News Page</h1>
        <div className='cards-container'> 
          <NewsItem  title='myTitle' description='myDescription' />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
       
        </div>
      


      </div>
    )
  }
}

export default News
