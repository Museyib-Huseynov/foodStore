import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Orders from './components/Orders'
import SingleOrder from './components/SingleOrder'
import NewOrder from './components/NewOrder'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='orders' element={<Orders />}>
          <Route path=':orderID' element={<SingleOrder />} />
        </Route>
        <Route path='neworder' element={<NewOrder />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
