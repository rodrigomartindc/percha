import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import cartContext from "../../storage/CartContext";
import { createBuyOrderFirestoreWithStock } from "../../services/firebase";
import Swal from "sweetalert2";
import BuyForm from "./BuyForm";
import "./cart.css";
import CancelIcon from '@mui/icons-material/Cancel';
import Divider from '@mui/material/Divider';

function Cart() {
  const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext);
  const navigate = useNavigate();

  if (cart.length === 0)
    return (
    
    <div>
      <h4 className="carrito-vacio">EL CARRITO ESTA VACIO</h4>
      <Link to="/">Volver al Catalogo</Link>
    </div>
    )

  function createBuyOrder(userData) {
    const buyData = {
      buyer: userData,
      items: cart,
      total: totalPriceInCart(),
      date: new Date(),
    };

    createBuyOrderFirestoreWithStock(buyData).then((orderId) => {
      clear();
      navigate(`/checkout/${orderId}`);
      Swal.fire({
        title: "Compra Finalizada con éxito!",
        text: `Numero de orden: ${orderId}`,
        icon: "success",
      });
    });
  }

  return (
    <div>
      {cart.map((item) => (
        <div className="cart-container">
          <div className="cart-img">
            <img src={item.thumbnail}></img>
          </div>

          <div className="cart-detail">
            <p className="cart-item-title">{item.title}</p>
            <p>Precio: $ {item.price}</p>
            <p>Cantidad: {item.count}</p>
          </div>
          <CancelIcon onClick={() => removeItem(item.id)}></CancelIcon>
          
        </div>
        
      ))}
      <Divider />
      <button type="danger" className="clear-button" onClick={clear}>
        Vaciar Carrito
      </button>

      <div className="container-subtotal">
        <p className="subtotal-title">Subtotal: ${totalPriceInCart()}</p>
        <BuyForm onSubmit={createBuyOrder} />
      </div>
    </div>
  );
}

export default Cart;
