import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getCategories, handleShowTitle} from "../../redux/categoryReducer"
import Category from "./Category"

const CategoryContainer = () => {
  const [showChildCategory, setShowChildCategory] = useState(null)
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const handleClickShowTitle = (id, title) => {
    dispatch(handleShowTitle(id, title))
  }

  const handleClickCategory = (id) => {
    setShowChildCategory(id)
  }

  return (
    <Category categories={categories} handleShowTitle={handleClickShowTitle}
              handleClickCategory={handleClickCategory}
              showChildCategory={showChildCategory}/>
  )
}

export default CategoryContainer

