import React from "react"
import styles from './Search.module.css'

const Search = ({onTextChange, inputText}) => {

  return (
    <div className={styles.search}>
      <input onChange={e => onTextChange(e)}
             autoFocus={true}
             value={inputText}/>
    </div>
  )
}

export default Search