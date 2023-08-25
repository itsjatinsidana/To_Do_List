import { Navbar } from "./Navbar"
import React, { useState } from 'react';

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const [formData, setFormData] = useState({
        username: '',
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
      };


    return (
        <>
            <Navbar />

            <div className="banner">
                <div className="banner-content">
                    <h2>Organize your work <br /> and life, finally.</h2>
                    <p>Become focused, organized, and <br />calm with Todoist. </p>
                    <button onClick={openModal} >Start for free</button>
                </div>
                <div className="banner-img">
                    <img className="banner-image" src="./assets/images/todolist.jpg" alt="image" />
                </div>

            </div>
            <div>

                {isOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>

                            <div className="signup-form-container">
                                <h2>Sign Up</h2>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
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
                                    <button type="submit">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </>
    )
}