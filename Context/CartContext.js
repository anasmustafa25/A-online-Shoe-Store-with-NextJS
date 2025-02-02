"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Cart Provider to wrap your components
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

  // Function to add product to cart (with quantity check)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 0,
              }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove the item if quantity is 0
    });
  };

  // Calculate total price of all items in cart
  const totalPrice = cart.reduce(
    (total, product) => total + parseFloat(product.price.replace("$", "")) * product.quantity,
    0
  );

  // Load cart from localStorage when mounted
  useEffect(() => {
    setIsMounted(true); // Set mounted to true after the component is mounted
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    }
  }, []);

  // Persist cart in localStorage when cart changes
  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  if (!isMounted) {
    return null; // Prevent rendering until the component is mounted
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use Cart context
export const useCart = () => useContext(CartContext);
