"use client";
import "./cart.css";
import { useCart } from "@/Context/CartContext";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    toast.info("Product removed from cart", {
      position: "top-center",
      theme: "dark",
      autoClose: 2000,
    });
  };
  return (
    <div className="cart-page">
    
      <h1 className="cart-title">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty. Add products to start shopping!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <img src={product.image} alt={product.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{product.name}</h3>
                  <p className="cart-item-description">{product.description}</p>
                  <p className="cart-item-price">
                    ${parseFloat(product.price.replace("$", "")).toFixed(2)}
                  </p>
                  <p className="cart-item-quantity">Quantity: {product.quantity}</p>
                  <button
                    className="remove-button"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total Price</h2>
            <p className="total-price">${totalPrice.toFixed(2)}</p>
          </div>
          <button className="checkout">Checkout</button>
        </>
      )}
    </div>
  );
}
