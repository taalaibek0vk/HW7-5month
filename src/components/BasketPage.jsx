import { useSelector, useDispatch } from "react-redux";
import { basketActions } from "../store/basketSlice";
import { Link } from 'react-router-dom';

export default function Cart({item}) {
  const cartItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(basketActions.removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(basketActions.clearCart());
  };

  return (
    <div >
      <h1>Basket</h1>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item._id}>
            <img src={item.picture} />
            <h3>{item.name}</h3>
            <p>Price: {item.price} $</p>
            <p>Color: {item.color}</p>
            <button onClick={() => handleRemoveFromCart(item._id)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        {cartItems.length > 0 && (
        <button onClick={handleClearCart}>Delete all products</button>
      )}
      <Link to="/">Back to products</Link>
      </div>
    </div>
  );
}