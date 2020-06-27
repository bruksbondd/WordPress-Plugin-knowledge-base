import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import Title from "./Title"
import {getPosts, handleGetPost} from "../../redux/postsReducer"
import {useHistory} from "react-router-dom"

const TitleContainer = ({searchTitle}) => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.posts)
  let searchPost = useSelector((state) => state.post.searchPost)
  const activePost = useSelector((state) => state.post.activePost)
  const activeCategoryId = useSelector((state) => state.category.activeCategoryId)
  const activeCategoryTitle = useSelector((state) => state.category.activeCategoryTitle)
  const history = useHistory();
  const [activeClass, setActiveClass] = useState()

  useEffect(() => {
    if (activePost) {
      setActiveClass(activePost.id)
    }
  }, [activePost])

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  const changeActiveClass = (id) => {
    setActiveClass(id)
  }

  const handleClickPost = (id, slug) => {
    dispatch(handleGetPost(id, slug))
    history.push('/knowledge-base/')
    history.push(`#/${slug}`)
  }

  const onHandleGetPost = (id, slug) => {
    handleClickPost(id, slug)
    changeActiveClass(id)
  }

  const postTitleCategory = posts && posts.map((post) => {
    const changedCategory = post.base.filter(i => i === activeCategoryId)
    if (changedCategory.length > 0) {
      return post
    }
    return null
  })

  const searchPostTitle = searchPost && searchPost.map((post) => {
    return post
  })

  let postTitle = searchPost.length ? searchPostTitle : postTitleCategory

  return (
    <Title handleSearch={searchTitle} activeClass={activeClass}
           onHandleGetPost={onHandleGetPost} postTitle={postTitle}
           activeCategoryId={activeCategoryId}
           activeCategoryTitle={activeCategoryTitle}/>
  )
}
export default TitleContainer