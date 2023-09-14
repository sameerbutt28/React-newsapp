import React, { Component } from 'react'
import NewsItem from './newsItem'
import './News.css'
import Spinner from './Spinner';
export class News extends Component {
// static defaultProps ={
//   country: 'in',
//   pageSiza: 8,
// }
// static propTypes ={
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
// }
  constructor() {
    super();
    // console.log('I am a constructor from new component');
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    // console.log("componentDidMount");
    let url = `https://newsapi.org/v2/everything?q=apple&from=2023-08-31&to=2023-08-31&sortBy=popularity&category=${this.props.category}&apiKey=2c649df290b3441db496a9e27cc18e34&page=1&pagesize=${this.props.pageSize} `;
    this.setState({loading : true,})

    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({ articles: parsedData.articles,
      loading:false, })
  }



  render() {
    const handlePrevClick = async () => {
      console.log('prev clicked');
      let url = `https://newsapi.org/v2/everything?q=apple&from=2023-08-31&to=2023-08-31&sortBy=popularity&category=${this.props.category}&apiKey=2c649df290b3441db496a9e27cc18e34&page=${this.state.page - 1} &pagesize=${this.props.pageSize} `;
      this.setState({loading : true,})

      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading:false,
      })
    }
    const handleNextClick = async () => {
      console.log('next clicked');
      let url = `https://newsapi.org/v2/everything?q=apple&from=2023-08-31&to=2023-08-31&sortBy=popularity&category=${this.props.category}&apiKey=2c649df290b3441db496a9e27cc18e34&page=${this.state.page + 1} &pagesize=${this.props.pageSize} `;
      this.setState({loading : true,})
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false,
      })
    }
    // console.log('render');
    return (
      <div>
<div className='btn-container'>
          <button disabled={this.state.page <= 1} className='prevbtn' onClick={handlePrevClick} > &larr; Previous </button>
          <button className='nextbtn' onClick={handleNextClick} > Next &rarr;</button>


        </div>
        <h1 className='top-heading'>28-News   Top Headlines </h1>
{  this.state.loading && <Spinner/>}
        <div className='cards-container'>
       
          { !this.state.loading && this.state.articles.map((element) => {

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
