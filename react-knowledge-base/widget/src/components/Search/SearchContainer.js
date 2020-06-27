import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import Search from "./Search";
import {searchTitle} from "../../redux/postsReducer";

const SearchContainer = () => {
  const dispatch = useDispatch()

  const [inputText, setInputText] = useState('')

  const handleSearch = (text) => {
    dispatch(searchTitle(text))
  }

  const onTextChange = (e) => {
    setInputText(e.currentTarget.value)
    e.currentTarget.value.length > 3 && handleSearch(inputText.toLowerCase().trim())
  }

  return (
    <Search onTextChange={onTextChange} inputText={inputText}/>
  )
}
export default SearchContainer