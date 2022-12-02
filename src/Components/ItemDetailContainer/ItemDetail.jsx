import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import cartContext from '../../storage/CartContext'
import Swal from "sweetalert2";

import "./itemdetail.css";
import { Link } from 'react-router-dom'

function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);

  const { cart, addToCart } = useContext(cartContext);

  let itemInCart = cart.find((item) => product.id === item.id);
  let stock = product.stock;
  if (itemInCart) stock -= itemInCart.count;
 

  function onAddToCart(count) {
    // Swal.fire({
    //   title: `Agregadas ${count} unidades al Carrito`,
    //   text: "¿Deseas ir al carrito?",
    //   icon: "success",
    //   confirmButtonText: "Ir al carrito",
    // }).then((result) => {
    //   /* Read more about isConfirmed, isDenied below */
    //   if (result.isConfirmed) {
    //     navigate("/cart");
    //   }
    // });

    const itemForCart = {
      ...product,
      count,
    };

    addToCart(itemForCart)
    setIsInCart(true);
  }

  return (
    <div className="item-detail">
      <div className="item-detail_img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="item-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
        </div>
      {!isInCart ? (
        <ItemCount
          text="Agregar al carrito"
          onAddToCart={onAddToCart}
          stock={product.stock}
        />
      ) : (
        <div>
          <Link to="/cart">
            <button>Ir al Carrito</button>
          </Link>
          <button>Volver al catálogo</button>
          <button>Quitar del carrito</button>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;