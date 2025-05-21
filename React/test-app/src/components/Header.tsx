import { Link } from "react-router"

const Header = () => {
    return (
        <header className="bg-primary text-white text-center py-5">
            <div className="container">
                <h1>Welcome to My Professional Website</h1>
                <p className="lead">Simple, Clean & Responsive Bootstrap Template</p>
                <Link to="/" className="btn btn-light btn-lg">Learn More</Link>
            </div>
        </header>
    )
}

export default Header