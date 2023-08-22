import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-logo">
                    <Link to={'/'}>
                        <span>To Do List</span>
                    </Link>
                </div>
                <div className="navbar-list">
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className="nav-li">
                            <Link to={'/login'}>Login</Link>
                        </li>


                    </ul>
                </div>
            </nav>
        </>
    )
}