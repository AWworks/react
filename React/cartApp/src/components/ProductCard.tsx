import { useCart } from "../contexts/CartContext";
import type { Product } from "../types/Product";


const ProductCard = (product: Product) => {
    const { addToCart } = useCart();

    return (
        <div className="card h-100 shadow-sm d-flex flex-column">
            <img
                src={product.image}
                alt={product.name}
                className="w-100"
                style={{
                    height: "200px",
                    objectFit: "contain",
                    padding: "10px"
                }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted mb-1">Category: {product.category}</p>
                    <p className="card-text fw-bold">₹{product.price}</p>
                </div>
                <button
                    className="btn btn-success mt-auto w-100"
                    onClick={() =>
                        addToCart({
                            id: product.id,
                            name: product.name,
                            category: product.category,
                            price: product.price,
                            image: product.image
                        })
                    }
                >
                    Add to Cart 🛒
                </button>
            </div>
        </div>
    );
};

export default ProductCard;