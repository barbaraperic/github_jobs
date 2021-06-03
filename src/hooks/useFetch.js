import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';

export const useFetch = (url) => {
  const cache = useRef({});
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return
    
    const fetchPosts = async () => {
      if (cache.current[url]) {
        const data = cache.current[url]
        setResponse(data)
        setLoading(false)
      } else {
        const res = await axios.get(url)
        cache.current[url] = res.data;
        setResponse(res.data);
        setLoading(false)
      }
    }
    fetchPosts();
  }, [url])

  return { response, loading }
 }

 