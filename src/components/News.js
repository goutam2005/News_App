import React, { useState, useEffect } from 'react';
import NewsItem from './Newsitem';
import Spinner from './spiner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const capitalizedCategory = `${props.category.charAt(0).toUpperCase()}${props.category.slice(1)}`;
    document.title = `${capitalizedCategory} - NewsMonkey`;
  }, [props.category]);

  useEffect(() => {
    setArticles([]); // Clear articles when category changes
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category]);
  
  const fetchArticles = async () => {
    props.setProgress(10);
    setLoading(true);
    setError(null); // Reset error state
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pagesize=${props.pagesize}`;
    props.setProgress(30);
    try {
      let data = await fetch(url);
      let parse = await data.json();
      props.setProgress(70);
      if (parse.status === "error") throw new Error(parse.message);
      setArticles((prevArticles) => prevArticles.concat(parse.articles));
      setTotalResults(parse.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      setError("Failed to fetch news. Please try again.");
      setLoading(false);
      props.setProgress(100);
    }
  };

  const fetchItems = async () => {
    setPage((prevPage) => prevPage + 1);
    setLoading(true);
    await fetchArticles();
    setLoading(false);
  };

  return (
    <>
    
      <h1 style={{ margin: "35px 0px", textAlign: "center", fontSize: "35px" }}>
        This is Breaking News
      </h1>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchItems}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />} // Show spinner when loading
        endMessage={
          <h2 style={{ margin: "35px 0px", textAlign: "center", fontSize: "35px" }}>
            No more items to load
          </h2>
        }
      >
        <div className="ml-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {articles.map((element, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-4">
                <NewsItem
                  title={element.title ? element.title.slice(0, 35) : ""}
                  description={element.description ? element.description.slice(0, 100) : ""}
                  imageurl={element.urlToImage}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};


export default News;
