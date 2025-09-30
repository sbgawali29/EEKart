
describe('Full EEKart Flow: View, Add to Cart', () => {
    const BASE_URL = 'http://localhost:3000';
    
    beforeEach(() => {
        cy.visit(BASE_URL);
        
    });
    it('should successfully load products, add one to cart, and verify on cart page', () => {
        cy.contains('h1', 'Products').should('be.visible');
        cy.get('.product-grid .product-card').should('have.length.at.least', 1);

        cy.get('.product-grid .product-card')
            .first()
            .within(() => {
                cy.get('h2').invoke('text').as('productName');
                cy.contains('Add to Cart').click();
            });

        cy.get('.cart-count').should('contain', '1');

        cy.get('a[href="/cart"]').click();
        cy.url().should('include', '/cart');
        cy.contains('h1', 'Your Cart').should('be.visible');
    });
});