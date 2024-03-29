import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"
import "./navbar.css"
import TemporaryDrawer from '../Drawer/TemporaryDrawer'



function NavBar() {

    return (
            <div className='flex-row header-navbar'>

                <TemporaryDrawer></TemporaryDrawer>

                <Link to="/" className='flex-column logodiv'>
                    <img className='logo' src='./img/logo.png' alt='logo' />
                    <h1 className='title-logo'>PERCHA</h1>
                </Link>

                <Link to="/category/shirts" className='category'>REMERAS</Link>
                <Link to="/category/hoodies" className='category'>BUZOS</Link>
                <Link to="/category/pants" className='category'>PANTALONES</Link>
                <Link to="/category/shorts" className='category'>SHORTS</Link>


                <div className='user-navbar'>
                    <i className="fa-solid fa-user"></i>
                    <CartWidget className="cartwidget" />
                </div>

            </div>
    )
}

export default NavBar