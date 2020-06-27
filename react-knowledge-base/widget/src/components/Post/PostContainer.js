import React from 'react'
import {useSelector} from "react-redux"
import Post from "./Post";

const PostContainer = () => {

  const activePost = useSelector((state) => state.post.activePost)

  return (
    <Post activePost={activePost}/>
  )
}
export default PostContainer