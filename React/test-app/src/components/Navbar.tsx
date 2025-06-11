import { Link } from "react-router";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">My Website</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
                        <li className="nav-item"><Link to="/posts" className="nav-link">Posts</Link></li>
                        <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
                        <li className="nav-item"><Link to="/recipes" className="nav-link">Recipes</Link></li>
                        <li className="nav-item"><Link to="/register" className="nav-link">RegisterUser</Link></li>
                        <li className="nav-item"><Link to="/counter" className="nav-link">Counter</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;