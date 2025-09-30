import { render, screen } from '@testing-library/react'; 
import MessagePanel from './MessagePanel';

describe('MessagePanel Component', () => {
  const mockClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('when message is null', () => {
    render(<MessagePanel message={null} closeMessagePanel={mockClose} />);
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
  });

  test('when message is valid', () => {
    render(<MessagePanel message="Product added to cart" closeMessagePanel={mockClose} />);
    expect(screen.getByText(/Product added to cart/i)).toBeInTheDocument();
  });
  
});