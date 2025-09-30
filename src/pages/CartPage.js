import Cart from "../components/Cart";
import { useCartContext } from '../context/CartContext'; 
const CartPage = () => {
  const { cartItems } = useCartContext();
  return (
    <div>
      <h1>Your Cart</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default CartPage;
