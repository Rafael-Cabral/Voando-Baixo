import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Map from '../pages/Map'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Login />} />
                <Route path="/app" element={< App />} />
                <Route path="/map" element={< Map/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;