import { useCart } from "@/Context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Card({ product }) {
  const { addToCart } = useCart();
  

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart successfully" ,{theme:'dark',position:'top-center',autoClose: 2000,})
    
  };
    return (
      <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p className="card-price">{product.price}</p>
        <button className="card-link" onClick={handleAddToCart} >
          Add to Cart
        </button>
      </div>
    </div>
  );
}


