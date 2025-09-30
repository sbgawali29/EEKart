import ProductCard from "./ProductCard"; 

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
