import React from 'react'

const NewsItem = ({newsItem}) => {
  // Destructuring
  const {title, description, url, urlToImage} = newsItem;

  return (
    <div className="card hoverable ">
      <div className="card-image">
        <img alt={title} src={urlToImage} />
        <span className="card-title  post-title">{title}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <a href={url} target="_blank" rel="noopener noreferrer" className="teal-text">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem
