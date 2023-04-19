import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { ClerkProvider } from '@clerk/clerk-react'

const clerkPubKey = 'pk_test_ZGVsaWNhdGUtY29kLTg2LmNsZXJrLmFjY291bnRzLmRldiQ'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </ClerkProvider>,
)
