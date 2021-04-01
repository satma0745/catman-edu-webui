import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import { configureAxios } from './api'

import { AuthProvider, loadUserInfo } from './auth'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './components/App'

configureAxios()
loadUserInfo()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
