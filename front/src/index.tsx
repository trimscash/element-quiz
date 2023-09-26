import React from 'react'
import { CookiesProvider } from 'react-cookie'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './stores/store'
import App from './view/App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement)

root.render(
  // <React.StrictMode>
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
  // </React.StrictMode>
)
