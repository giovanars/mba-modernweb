import { useParams } from "react-router";
import { products } from "../../products"

function ProductDetails(){

    const {id} = useParams();

    let product = products.find(p => p.id === parseInt(id))

    return (
    <>
        <h2>Product Details</h2>

        <div>
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <p>{product.description}</p>
            <button>Buy</button>
        </div>
    </>
    )
}

export default ProductDetails;