import { render, screen } from "@testing-library/react"; 

import Footer from "./Footer";

beforeAll(() => {
    jest.spyOn(console, "warn").mockImplementation((msg) => {
        if (msg.includes("React Router Future Flag Warning")) return;
        console.warn(msg);
    });
});

afterAll(() => {
    console.warn.mockRestore();
});

describe("Footer Component", () => {
    test("render footer in the document", () => {
        render(
            <Footer />
        );
        expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    });

    test("shows footer text", () => {
        render(
            <Footer />
        );
        const currentYear = new Date().getFullYear();
        expect(screen.getByText(`© ${currentYear} EEKart. All rights reserved.`)).toBeInTheDocument();

    });


});
