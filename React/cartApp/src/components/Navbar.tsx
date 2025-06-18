import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext"; // <-- Import useCart

const Navbar = () => {
    const { cart } = useCart(); // <-- Get cart from context

    // Calculate total items in cart
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <nav className="navbar navbar-expand navbar-light bg-light px-3">
                <Link className="navbar-brand" to="/">
                    Shop
                </Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">
                        Products
                    </Link>
                    <Link className="nav-link position-relative" to="/cart">
                        Cart
                        {totalItems > 0 && (
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                style={{ fontSize: "0.75rem" }}
                            >
                                {totalItems}
                                <span className="visually-hidden">items in cart</span>
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;