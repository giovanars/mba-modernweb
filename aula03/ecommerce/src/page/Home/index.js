import ProductAlert from "../../components/ProductAlert"
import {products} from "../../products"
import { Link } from "react-router-dom"

function Home(){

    const handleShare = (id) => {
        alert(`O produto ${id} foi compartilhado!`)
    };

    const handleNotify = () => {
        alert("Você será notificado quando esse produto for vendido")
    };    

    return (
        <>
            <h1>Product List</h1>

            {products.map(product => (
                <div style={{display: "flex", flexDirection: "column"}}>
                    <h3>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </h3>

                    {product.description && <p>Description: {product.description}</p>}
                
                    <button onClick={() => handleShare(product.id)} >Share</button>
                    
                    <ProductAlert product={product} handler={handleNotify}/>
                </div>
            ))}            
        </>
    )
}

export default Home;