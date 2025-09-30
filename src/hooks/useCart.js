import { useState } from 'react'; 
export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [message, setMessage] = useState('');
    const addToCart = (product) => {
        setMessage(`Product added to cart`);
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };

    const closeMessagePanel = () => {
        setMessage('');
    }

    return { cartItems, addToCart, message, closeMessagePanel };
}