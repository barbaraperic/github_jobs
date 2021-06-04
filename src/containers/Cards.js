import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useCurrentPosts from '../hooks/useCurrentPosts';
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  const [currentPosts] = useCurrentPosts(posts, postsPerPage, currentPage);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false)
    }

    fetchPosts();
  }, [])


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
    
    if ((currentPage - 1) % pageNumberLimit === 0){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }
  
  if (loading) {
    return <p>Loading</p>
  }

  return (
    <Wrapper>
      {currentPosts.map((post, index) => (
        <Card
          key={index}
          imageSrc="https://source.unsplash.com/random"
          label={post.body.substring(0, 4)}
          title={post.title.substring(0, 5)}
          type="Full time"
          location="London"
          time="5 days ago"
        />
      ))}
      <Pagination
        postsPerPage={postsPerPage} 
        totalPosts={posts.length} 
        paginate={paginate} 
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        maxPageNumberLimit={maxPageNumberLimit}
        minPageNumberLimit={minPageNumberLimit}
        currentPage={currentPage}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`

export default Cards