
import '../styles/Cart.scss'; 

const Cart = ({ cartItems }) => {
  const totalProducts = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal;

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>{'Your cart is empty'}</h2>
        <p>{'Add some products to see them here.'}</p>
      </div>
    );
  }

  return (
    <div className="cart-details">
      <div className="cart-items">
        <h2>{'Item List'}</h2>
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="item-info">
              <h4>{item.title}</h4>
              <p>{item.qty} × ${item.price} = ${item.qty * item.price}</p>
              
            </div>
             <hr />
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h2>{'Order Summary'}</h2>
        <div className="summary-row">
          <span>{'Products'} ({totalProducts})</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>      
        <div className="summary-row total">
          <span>{'Total amount'}</span>
          <span>${total.toFixed(2)}</span>
        </div>        
      </div>
    </div>
  );
};

export default Cart;
