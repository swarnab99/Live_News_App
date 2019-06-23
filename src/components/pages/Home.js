import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import News from '../news/News'
import Searchbar from '../Searchbar'

const Home = () => {
  // States
  const [news, setNews] = useState([]);
  const [settings, setSettings] = useState({
    // Top Headlines parameters
    category: 'business',         // business entertainment general health science sports technology

    // For Specific Topic parameters
    soryBy: 'publishedAt',      // relevancy | popularity | publishedAt  [Default: publishedAt]
    from: '',                   // A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2019-06-23 or 2019-06-23T15:05:11) Default: the oldest according to your plan.
    to: '',                     // A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2019-06-23 or 2019-06-23T15:05:11) Default: the newest according to your plan.

    // Common parameters
    mode: 'top-headlines',         // top-headlines | everything
    language: 'en',             // ar de en es fr he it nl no pt ru se ud zh
    country: 'in',              // ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
    apiKey: '45fa6e8efa114383ae01cee1afd7949a',
    pageSize: 10,               // No of news returned from api
    q: 'india',                 // Keywords or phrases to search for.


    // Utility
    loading: false
  });



  // Method similar to componentDidMount()
  useEffect(() => {
    const searchKey = '';
    // At initial state showing the top news
    const mode= 'top-headlines';
    onSearch(searchKey, mode )

  }, []);



  const onSearch = (searchKey, mode = 'everything') => {
    // set News array to empty to show the loading on next search
    setNews([]);
    // *Default apiLink for mode = 'everything'
    var apiLink = `https://newsapi.org/v2/${mode}?q=${searchKey}&from=${settings.from}&to=${settings.to}&language=${settings.language}&sortBy=${settings.soryBy}&pageSize=${settings.pageSize}&apiKey=${settings.apiKey}`;

    // *If mode = 'top-headlines' then apiLink needs extra parameter i.e. category
    if(mode == 'top-headlines') {
      // ! Lots of features need to add in this apiLink
      apiLink = `https://newsapi.org/v2/${mode}?country=${settings.country}&apiKey=${settings.apiKey}&category=${settings.category}`;
      console.log(apiLink,mode)
    }

    console.log(apiLink,mode)
      
    Axios.get(apiLink)
      .then(res => {
        setNews(res.data.articles);
      }) .catch(err => console.log(err))
    
  }



  return (
    <div className="container">
      <Searchbar onSearch={onSearch}  />
      <News news={news}/>
    </div>
  )
}

export default Home
