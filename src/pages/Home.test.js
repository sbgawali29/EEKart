import { render, screen } from '@testing-library/react';
import Home from './Home';

jest.mock('../hooks/useProducts', () => ({
  useProducts: jest.fn(),
}));

jest.mock('../context/CartContext', () => ({
  useCartContext: jest.fn(),
}));

import { useProducts } from '../hooks/useProducts';
import { useCartContext } from '../context/CartContext';

describe('Home Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('shows loading message when products are loading', () => {
    useProducts.mockReturnValue({
      data: null,
      loading: true,
      error: false,
    });

    useCartContext.mockReturnValue({
      addToCart: jest.fn(),
    });

    render(<Home />);
    expect(screen.getByText(/loading products/i)).toBeInTheDocument();
  });

  test('Show notfound error when rest api fails to load', () => {
    useProducts.mockReturnValue({
      data: null,
      loading: false,
      error: true,
    });

    useCartContext.mockReturnValue({
      addToCart: jest.fn(),
    });

    render(<Home />);
    expect(screen.getByText(/not found/i)).toBeInTheDocument(); 
  });

  test('shows product list and heading when data is available', () => {
    useProducts.mockReturnValue({
      data: [{
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://equalexperts.github.io/frontend-take-home-test-data/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        "rating": {
          "rate": 4.1,
          "count": 259
        }
      }],
      loading: false,
      error: false,
    });

    useCartContext.mockReturnValue({
      addToCart: jest.fn(),
    });

    render(<Home />);
    expect(screen.getByRole('heading', { name: /products/i })).toBeInTheDocument();
    expect(screen.getByText(/Mens Casual Premium Slim/i)).toBeInTheDocument();
    
  });
});