import React from 'react'
import Menu from '../menu/Menu'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PrivateRoute from './ProtectedRoute.js'
import Estadistica from '../estadistica/Estadistica'
import HistorialRiego from '../tabla_datos/HistorialRiego'
import Login from '../login/Login'
import HomePage from './HomePage'


function RoutesMenu() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}></Route>                
                <Route path='/dashboard/*' element={<PrivateRoute></PrivateRoute>}>
                    <Route path='home' element={<HomePage/>}></Route>
                    <Route path='estadistica' element={<Estadistica/>}></Route>
                    <Route path='historialRiegos' element={<HistorialRiego />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesMenu