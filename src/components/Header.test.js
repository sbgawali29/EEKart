import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import Header from "./Header";

beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation((msg) => {
        if (msg.includes("React Router Future Flag Warning")) return;
        console.warn(msg);
    });
});

afterAll(() => {
    console.warn.mockRestore();
});
jest.mock('../context/CartContext', () => ({
  useCartContext: () => ({
    cartItems: [{ id: 1 }, { id: 2 }], 
  }),
}));

describe("Header Component", () => {
  test("renders logo and title", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("EEKart")).toBeInTheDocument();
    expect(screen.getByAltText("EEKart Logo")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByTestId('cart-link')).toBeInTheDocument();
  });

  test("shows correct cart count", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText("2")).toBeInTheDocument();
  });
});

