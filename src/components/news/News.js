import React from 'react'
import NewsItem from './NewsItem'
import Loading from '../Loading'

const News = ({news}) => {
  // console.log(news)
  // *If news is not null then apply the map() function else show loading bar
  const newsBlock = news.length ? (
    news.map(newsItem => {
      return (
        <div key={newsItem.url}>
          <NewsItem newsItem={newsItem} />
        </div>
      )
    })
  ) : (<Loading />);

  return (
    <div>
      {newsBlock}
    </div>
  )
}

export default News
