import ProductList from '../components/ProductList';
import { useProducts } from '../hooks/useProducts';
import NotFound from './NotFound';
import { useCartContext } from '../context/CartContext';
import MessagePanel from '../components/MessagePanel'; 

const Home = () => {
  const { data: products, loading, error } = useProducts();
  const { addToCart, message, closeMessagePanel } = useCartContext();
  if (loading) {
    return <p className='loading-message'>Loading Products...</p>;
  }
  if (error) {
    return <NotFound />;
  }

  const filteredProducts = products;

  return (
    <div>
      <h1>Products</h1>
      <MessagePanel message={message} closeMessagePanel={closeMessagePanel} />
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default Home;