import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { getCookie,setCookie } from "./config/CookieMaker";
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const nav = useNavigate();

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const [formData, setFormData] = useState({

        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can perform further actions like sending data to a server here
        axios.post("http://localhost:5000/login", formData)
            .then((res) => {
                if (res.data === 'success') {
                    console.log('login successful')
                    setCookie('em',formData.email,5)
                    nav('/notes')
                }
                else if (res.data === 'password not matched') {
                    console.log('password not matched')
                }
                else if (res.data === 'account does not exist') {
                    console.log('account does not exist')
                }
            })
            .catch((e) => {
                console.log(e);
            })
    };
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-logo">
                    <Link to={'/'}>
                        <span>ToDoList</span>
                    </Link>
                </div>
                <div className="navbar-list">
                    <ul className="nav-ul">
                        <li className="nav-li">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className="nav-li">
                            <button onClick={openModal} className="login-btn" >Login</button>
                        </li>


                    </ul>
                </div>
                <div>

                    {isOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>&times;</span>

                                <div className="signup-form-container">
                                    <h2>Login</h2>
                                    <form onSubmit={handleSubmit}>

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        <button type="submit">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}