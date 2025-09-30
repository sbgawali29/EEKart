import '../styles/ProductCard.scss'; 

const descriptionMaxLenght = 50;
const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.title}
                className="product-card__image"
            />
            <div className="product-card__content">
                <h2 className="product-card__title">{product.title}</h2>
                <p className="product-card__price">${product.price}</p>
                <p className="product-card__description">{product.description.slice(0, descriptionMaxLenght) + "..."}</p>
                <button className="product-card__button" onClick={() => onAddToCart(product)}>
                    {'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;


