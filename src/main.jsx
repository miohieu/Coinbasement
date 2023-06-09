import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from '../lib/theme.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App theme={theme} />
  </React.StrictMode>,
)
