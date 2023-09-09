import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../store/basketSlice";
import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  const cartItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(basketActions.addToCart(product));
  };

  return (
    <div>
      <div className="navbar">
      <h1>STORE</h1>
      <Link to={'/basket'}>Basket ({cartItems.length})</Link>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.picture} />
            <h3>{product.name}</h3>
            <p>Price: {product.price} $</p>
            <p>Color: {product.color}</p>
            <button onClick={() => handleAddToCart(product)}>Buy</button>
          </div>
        ))}
    </div>
  </div>
  );
}
