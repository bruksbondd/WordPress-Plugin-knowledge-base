import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppContainer from './AppContainer.js'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from "react-router-dom"
import store from "./redux/redux-store"
import {Provider} from "react-redux"

const target = document.getElementById('erw-root')
if (target) {
  ReactDOM.render(<BrowserRouter><Provider
    store={store}><AppContainer/></Provider></BrowserRouter>, target)
}

serviceWorker.unregister();