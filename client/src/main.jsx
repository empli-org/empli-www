import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
