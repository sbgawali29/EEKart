import '../styles/Header.scss'; 
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
const Header = () => {
    const { cartItems } = useCartContext();
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="logo">
                        <img src={logo} alt="EEKart Logo" />
                        <h1>EEKart</h1>
                    </div>
                    <nav className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/cart" className="cart-link" data-testid="cart-link">
                            🛒
                            <span className="cart-count">{cartItems.length}</span>
                            {/* Cart */}
                        </Link>

                    </nav>
                </div>
            </div>
        </header>)
};

export default Header;