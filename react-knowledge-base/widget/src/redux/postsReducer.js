import fetchData from "../api/fetchData"
import {activeCategoryId} from "./categoryReducer"

const SET_POSTS = 'SET_POSTS'
const SET_ACTIVE_POSTS = 'SET_ACTIVE_POSTS'
const SET_URL_LINK = 'SET_URL_LINK'
const SEARCH_POST = 'SEARCH_POST'

const initialState = {
  posts: [],
  activePost: null,
  urlLink: '',
  searchPost: []
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case SET_ACTIVE_POSTS:
      return {
        ...state,
        activePost: action.activePost
      }
    case SET_URL_LINK:
      return {
        ...state,
        urlLink: action.slug
      }
    case SEARCH_POST:
      return {
        ...state,
        searchPost: action.searchPost
      }
    default:
      return state
  }
}

const setCategories = (posts) => ({type: SET_POSTS, posts})
const setActivePost = (activePost) => ({type: SET_ACTIVE_POSTS, activePost})
export const setUrl = (slug) => ({type: SET_URL_LINK, slug})
export const setSearchPost = (searchPost) => ({type: SEARCH_POST, searchPost})

export const getPosts = () => async (dispatch) => {
  const data = await fetchData(`knowledge_base?base`)
  dispatch(setCategories(data))
}

export const handleGetPost = (id, slug) => async (dispatch) => {
  if (slug) {
    dispatch(setUrl(slug))
  }
  const data = await fetchData(`knowledge_base/${id}`)
  dispatch(setActivePost(data))
}

export const urlGetPost = (slug) => async (dispatch, getSate) => {
  dispatch(setUrl(slug))
  fetchData(`knowledge_base/?slug=${slug}`)
    .then((data) => {
      const catId = data[0].base[0]

      dispatch(setActivePost(data[0]))
      dispatch(activeCategoryId(catId))
    })
}

export const searchTitle = (text) => async (dispatch, getSate) => {
  const data = getSate().post.posts.map(item => {
    if (item && item.title.rendered.toLowerCase().includes(text) === true) {
      return item
    }
    return null
  })
  dispatch(setSearchPost(data))
}

export default postsReducer