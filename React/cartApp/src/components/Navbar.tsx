import { Link } from "react-router-dom";

const Navbar = () => {
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
                    <Link className="nav-link" to="/cart">
                        Cart
                    </Link>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;