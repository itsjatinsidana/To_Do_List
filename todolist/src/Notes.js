import { useState, useEffect, useRef } from "react";
import { Navbar } from "./Navbar";
import { getCookie } from "./config/CookieMaker";
import axios from "axios";



export const Notes = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setUserName] = useState('');
    const firstRender = useRef(true);
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }
   

   

    const [formData, setFormData] = useState({

        heading: '',
        notescontent: '',

    });
    function getUserData() {
        axios.post('http://localhost:5000/getuserdata', {
            "email": email

        }).then((res) => {
            console.log(res.data)
            setUserName(res.data.name)//welcome useername
        })

    }
    useEffect(() => {
        if (firstRender.current) {
            setEmail(getCookie('em'))
            firstRender.current = false;
        }
    }, []);
    useEffect(() => {
        if (!firstRender.current && email) {
            getUserData()
        }
    }, [email])

    const handleChangehead = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData); 
        // You can perform further actions like sending data to a server here
        axios.post("http://localhost:5000/makenotes",formData)
        .then((res) =>{
            if(res.data === 'success'){
                console.log('note created')
            }
            else if(res.data === 'error'){
                console.log(res.data)
                console.log("note not created")
            }
        })
        .catch((e) => {
            console.log(e);
        })
    };

    return (
        <>
            <Navbar />
            <div className="user">
                <h2> welcome {name}</h2>
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
                                    
                                    className="contents"
                                    name="notescontent"
                                    value={formData.notescontent}
                                    onChange={handleChangehead}
                                    placeholder="Enter your text here..."
                                    rows={20} // Adjust the number of rows as needed
                                    cols={30} // Adjust the number of columns as needed
                                />
                               
                                <div className="notes-btn">
                                    <button className="notes-button">Save</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>




            )}



        </>
    )
}