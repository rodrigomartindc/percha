import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

import "./navbar.css"

function NavBar() {


    return (
        <>

            <p className='banner'>
            </p>


            <div className='flex-row'>

                <div className='flex-column'>
                    <img className='logo' src='./img/logo.png' alt='logo' />
                    <h1 className='title-logo'>PERCHA</h1>
                </div>

                     <a className='category' href='#'>Remeras</a>
                    <a className='category' href='#'>Buzos</a>
                    <a className='category' href='#'>Pantalones</a>
                    <a className='category' href='#'>Shorts</a>


                <div className='flex-row'>
                    <i class="fa-solid fa-user"></i>
                    <CartWidget />
                </div>



            </div>



        </>
    )
}

export default NavBar