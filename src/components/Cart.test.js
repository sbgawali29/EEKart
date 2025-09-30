import { render, screen } from '@testing-library/react'; 
import Cart from './Cart';

describe('Cart Component', () => {
  const mockCartItems = [
    {
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
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "qty": 1,
      "image": "https://equalexperts.github.io/frontend-take-home-test-data/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    }
  ];

  test('renders item list with correct details', () => {
    render(<Cart cartItems={mockCartItems} />);

    expect(screen.getByText(/item list/i)).toBeInTheDocument();
    expect(screen.getByText(/Fjallraven - Foldsack No/i)).toBeInTheDocument();
    expect(screen.getByText(/2 × \$109.95/)).toBeInTheDocument();
    expect(screen.getByText(/Mens Casual Premium /i)).toBeInTheDocument();
    expect(screen.getByText(/1 × \$22.3/)).toBeInTheDocument();
  });

  test('disaplay order summary detailss', () => {
    render(<Cart cartItems={mockCartItems} />);

    expect(screen.getByText(/products \(3\)/i)).toBeInTheDocument();

    const amountElements = screen.getAllByText(/\$242\.20/);
    expect(amountElements).toHaveLength(2);

  });
});