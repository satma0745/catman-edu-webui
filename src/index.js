import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from 'react-query'
import { configureAxios } from 'api'

import { AuthProvider } from 'auth'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from 'components/App'

configureAxios()

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <QueryClientProvider client={new QueryClient()}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
