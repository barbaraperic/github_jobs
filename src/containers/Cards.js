import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false)
    }

    fetchPosts();
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
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
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`

export default Cards