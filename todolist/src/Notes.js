import { useState } from "react";
import { Navbar } from "./Navbar";



export const Notes = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const [formData, setFormData] = useState({

        heading: '',
        notescontent: '',

    });

    const handleChangehead = (e) => {
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
            <div className="user">
                <h2> welcome user</h2>
            </div>
            <div className="notes">
                <h4> number of notes : </h4>
            </div>
            <div className="addnew-btn">
                <button className="plus-btn" onClick={openModal}>+</button>

            </div>
            {isOpen && (
                <div className="modal-note">
                    <div className="modal-content-note">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="notes-content">
                            <form onSubmit={handleSubmit}>
                          
                                <input

                                    type="text"
                                    className="heading"
                                    name="heading"
                                    placeholder="Heading..."
                                   value={formData.heading} 
                                    onChange={handleChangehead}
                                    
                                />
                             
                               

                                <textarea
                                    value={text}
                                   className="contents"
                                   
                                    onChange={handleChange}
                                    placeholder="Enter your text here..."
                                    rows={20} // Adjust the number of rows as needed
                                    cols={30} // Adjust the number of columns as needed
                                />
                                <p>Character count: {text.length}</p>
                                <div className="notes-btn">
                                <button className="notes-button">save</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            )}

        </>
    )
}