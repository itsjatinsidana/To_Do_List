export const Navbar = () =>{
    return(
        <>
        <nav className="navbar-container">
            <div className="navbar-logo">
             <span>To Do List</span>
            </div>
            <div className="navbar-list">
             <ul>
              <li>
              <Link to={'/'}>Home</Link>
              </li>
               
                
             </ul>
             </div>
        </nav>
        </>
    )
}