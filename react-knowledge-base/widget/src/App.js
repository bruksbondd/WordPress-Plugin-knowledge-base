import React from 'react'
import {Route} from 'react-router-dom'
import styles from './App.module.css'
import CategoryContainer from "./components/Category/CategoryContainer"
import TitleContainer from "./components/Title/TitleContainer"
import PostContainer from "./components/Post/PostContainer"
import SearchContainer from "./components/Search/SearchContainer"

const App = () => {
  return (
    <Route path={`/knowledge-base/:slug?`}>
      <div className={styles.app}>
        <div className={styles.category}>
          <h3 className={styles.nameBase}>Knowledge Base</h3>
          <SearchContainer/>
          <CategoryContainer/>
        </div>
        <div className={styles.title}>
          <TitleContainer/>
        </div>
        <div className={styles.post}>
          <PostContainer/>
        </div>
      </div>
    </Route>
  )
}
export default App




