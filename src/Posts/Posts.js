import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import getAllPosts from './../Api/AxiosPosts';

const Posts = () => {
  const dispatch = useDispatch()
  const res = useSelector(state => state.postsRed.posts)
  const loading = useSelector(state => state.postsRed.isLoading)
  const error = useSelector(state => state.postsRed.error)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  return (
    <div>
      {
        error !== null ? <h1>{error}</h1> : null
      }
      {
        loading === false ? (     
          res.length >= 1 ? (
          res.map(post => <h4>{post.title}</h4>)
        ) : <h2>No Posts</h2>) 
        : (<h1>Loading...</h1>)
      }
    </div>
  )
}

export default Posts;