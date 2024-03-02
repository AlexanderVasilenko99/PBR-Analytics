import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Components/1-Layout/Layout'
import './main.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
)
