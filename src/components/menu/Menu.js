import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'
import '../../bulma.css'

function Menu() {

    function consumir_logout() {
        localStorage.removeItem('rol')
        localStorage.removeItem('id')
        window.location.href="/"
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" id='navbarinte'>
            <div  class="navbar-menu">
                <div className="navbar-start">

                    <a className="navbar-item">
                        <NavLink className={(data) => data.isActive ? 'active' : 'notActive'} to='/dashboard/estadistica'>Estadistica</NavLink>
                    </a>
                    <a className="navbar-item">
                        <NavLink className={(data) => data.isActive ? 'active' : 'notActive'} to='/dashboard/historialRiegos'>Historial</NavLink> 
                    </a>
                   
                </div>
                <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a onClick={consumir_logout} className="button is-danger">
                                    Log out
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu