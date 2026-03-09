
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <nav style={{display:"flex",gap:"20px",padding:"10px",background:"#eeeeee"}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Navbar