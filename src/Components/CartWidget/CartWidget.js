import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../../storage/CartContext'
import './cartWidget.css'

function CartWidget() {

  const context = useContext(cartContext)

  return (
    <div className='container-cart'>
      <Link to={"/cart"}><i class="fa-solid fa-cart-shopping"></i>
      {context.totalItemsInCart() > 0 ? (
        <>
          <span className='cart-counter'>{context.totalItemsInCart()}</span>
        </>
      ) : (
        <></>
      )}
     </Link>
    </div>
  );


}

export default CartWidget

