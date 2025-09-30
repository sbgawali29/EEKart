
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import './styles/Header.scss';
function App() {
  return (
    <CartProvider> 
      <Header/>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}
export default App;