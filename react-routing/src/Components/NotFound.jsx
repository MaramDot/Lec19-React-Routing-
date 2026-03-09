
import {useNavigate} from "react-router-dom"
function NoTFound(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    )
}

export default NoTFound