import React, {useEffect} from "react"
import {useDispatch} from "react-redux"
import App from "./App"
import {withRouter} from "react-router-dom"
import {urlGetPost} from "./redux/postsReducer"

const AppContainer = (props) => {
  const dispatch = useDispatch()
  const {hash} = props.history.location
  const urlLink = hash.replace('#/', '')

  useEffect(() => {
    if (urlLink) {
      dispatch(urlGetPost(urlLink))
    }
  }, [dispatch, urlLink])

  return (
    <App />
  )
}

export default withRouter(AppContainer)