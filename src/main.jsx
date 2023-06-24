import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Show from '../pages/_show.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>

        <Routes>
            <Route index element={<App />} />


            <Route path='/:id' element={<Show />} />

        </Routes>

    </BrowserRouter>
)
