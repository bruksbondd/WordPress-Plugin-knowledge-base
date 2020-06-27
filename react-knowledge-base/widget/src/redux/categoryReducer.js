import fetchData from "../api/fetchData"
import {setSearchPost} from "./postsReducer"

const SET_CATEGORY = 'SET_CATEGORY'
const SET_ACTIVE_CATEGORY_ID = 'SET_ACTIVE_CATEGORY'
const SET_ACTIVE_CATEGORY_TITTLE = 'SET_ACTIVE_CATEGORY_TITTLE'

const initialState = {
  categories: [],
  activeCategoryId: null,
  activeCategoryTitle: null
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categories: action.categories
      }
    case SET_ACTIVE_CATEGORY_ID:
      return {
        ...state,
        activeCategoryId: action.id
      }
    case SET_ACTIVE_CATEGORY_TITTLE:
      return {
        ...state,
        activeCategoryTitle: action.title
      }

    default:
      return state
  }
}

const setCategories = (categories) => ({type: SET_CATEGORY, categories})
export const activeCategoryId = (id) => ({type: SET_ACTIVE_CATEGORY_ID, id})
const activeCategoryTitle= (title) => ({type: SET_ACTIVE_CATEGORY_TITTLE, title})

export const getCategories = () => async (dispatch) => {
  const data = await fetchData(`base?per_page=50`)
  dispatch(setCategories(data))
}

export const handleShowTitle = (id, title) => (dispatch) => {
  dispatch(activeCategoryId(id))
  dispatch(activeCategoryTitle(title))
  dispatch(setSearchPost([]))
}

export default categoryReducer