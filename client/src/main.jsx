import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { ClerkProvider } from '@clerk/clerk-react'
import { AppContextProvider } from './pages/Account/OnboardingContext'
import { AccountContextProvider } from './pages/Account/AccountContext'

// @ts-ignore
const CLERK_PUB_KEY = import.meta.env.VITE_CLERK_PUB_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider
    publishableKey={CLERK_PUB_KEY}
    appearance={{
      layout: {
        logoImageUrl: '/empli-logo.png',
      },
      variables: {
        colorPrimary: '#1c2441',
        colorBackground: '#fbfbfb',
      },
    }}
  >
    <React.StrictMode>
      <AccountContextProvider>
        <AppContextProvider>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </AppContextProvider>
      </AccountContextProvider>
    </React.StrictMode>
  </ClerkProvider>,
)
