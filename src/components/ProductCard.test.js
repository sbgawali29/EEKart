import { render, screen, fireEvent } from '@testing-library/react'; 
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {
  const mockProduct = {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "qty": 2,
      "image": "https://equalexperts.github.io/frontend-take-home-test-data/img/81fPKd-2AYL._AC_SL1500_t.png",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    };

  const mockAddToCart = jest.fn();

  test('renders product details', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    expect(screen.getByText(/Fjallraven - Foldsack No/i)).toBeInTheDocument();
    expect(screen.getByText(/\$109\.95/)).toBeInTheDocument();   

    const truncated = mockProduct.description.slice(0, 50) + '...';
    expect(screen.getByText(truncated)).toBeInTheDocument();
  });

  test('AddToCart button is clicked', () => {
    render(<ProductCard product={mockProduct} onAddToCart={mockAddToCart} />);

    const button = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});