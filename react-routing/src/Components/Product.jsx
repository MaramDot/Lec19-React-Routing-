
import { useParams } from "react-router-dom"
function Product(){
    const {id}=useParams();
    return(
        <div>
            <h1>Products Page</h1>
            <p>Product id:{id}</p>
        </div>
    )
}

export default Product