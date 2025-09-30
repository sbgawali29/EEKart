import { createContext, useContext } from 'react'; 
import { useCart } from '../hooks/useCart'; 

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const cartData = useCart(); 
  return (
    <CartContext.Provider value={cartData}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};