import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link active" >Home</Link></li>
                    <li className="nav-item"><Link to="/courses" className="nav-link">Courses</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar;
