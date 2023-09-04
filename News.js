import React, { Component } from 'react'
import NewsItem from './newsItem'
import './News.css'
export class News extends Component {

  constructor() {
    super();
    // console.log('I am a constructor from new component');
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    }
  }

  async componentDidMount() {
    // console.log("componentDidMount");
    let url = "https://newsapi.org/v2/everything?q=apple&from=2023-08-31&to=2023-08-31&sortBy=popularity&apiKey=2c649df290b3441db496a9e27cc18e34&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles })
  }



  render() {
    const handlePrevClick = async () => {
      console.log('prev clicked');
      let url = `https://newsapi.org/v2/everything?q=apple&from=2023-08-31&to=2023-08-31&sortBy=popularity&apiKey=2c649df290b3441db496a9e27cc18e34&page=${this.state.page - 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
      })
    }
    const handleNextClick = async () => {
      console.log('next clicked');
      let url = `https://newsapi.org/v2/everything?q=apple&from=2023-08-31&to=2023-08-31&sortBy=popularity&apiKey=2c649df290b3441db496a9e27cc18e34&page=${this.state.page + 1}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
    // console.log('render');
    return (
      <div>
<div className='container'>
          <button disabled={this.state.page <= 1} className='prevbtn' onClick={handlePrevClick} > &larr; Previous </button>
          <button className='nextbtn' onClick={handleNextClick} > Next &rarr;</button>


        </div>
        <h1 className='top-heading'>28-News   Top Headlines</h1>

        <div className='cards-container'>
          {this.state.articles.map((element) => {

            return <div key={element.url} className='cards-container'>
              <NewsItem title={element.title ? element.title : 'The iPhone 15 and Other Apple Products We Still Expect in 2023 - CNET'} description={element.description ? element.description : 'One investor who is probably paying attention to Apples risks is Warren Buffett, as Berkshire Hathaway owns a $180 billion stake in the company.'} url={element.url} imageUrl={element.urlToImage ? element.urlToImage : 'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/08/Smartphone-market-worsening.webp?resize=1200%2C628&quality=82&strip=all&ssl=1'} />
            </div>
          })}




        </div>
        
      </div>

    )
  }
}

export default News
