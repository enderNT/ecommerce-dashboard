import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from 'react-router-dom'
import { ROUTER } from './config/Router.jsx'
import { Provider } from 'react-redux'
import { STORE } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={STORE}>
      <RouterProvider router={ROUTER} />
    </Provider>
  </React.StrictMode>
)
