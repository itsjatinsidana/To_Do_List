import { Navbar } from "./Navbar"

export const Home = () => {
    return (
        <>
            <Navbar />

            <div class="banner">
                <div className="banner-content">
                    <h2>Organize your work <br /> and life, finally.</h2>
                    <p>Become focused, organized, and <br/>calm with Todoist. </p>
                    <button>Start for free</button>
                </div>
                <div className="banner-img">
                    <img className="banner-image" src="./assets/images/todolist.jpg" alt="image"/>
                </div>

            </div>

        </>
    )
}