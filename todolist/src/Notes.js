import { Navbar } from "./Navbar";



export const Notes = () => {
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
                <button className="plus-btn">+</button>

            </div>

        </>
    )
}