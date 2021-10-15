import { useState } from "react";
import { useCart } from "../../providers/cart";

function Cart(){
    const { cartProducts } = useCart();
    const [ costumer, setCostumer] = useState({
        name: "",
        address: ""
    });

    const handleInput = (event) => {
        setCostumer(previusState => ({...previusState, [event.target.id]: event.target.value}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Olá ${costumer.name}, seu pedido está sendo preparado!`)
    }

    return(
        <>
            <h3>Cart</h3>

                {cartProducts.map(p =>  
                    <div>
                        <span>{p.name}</span>
                        <span>{p.price}</span>
                    </div>
                )}           
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="name"> Name </label>
                    <input id="name" type="text" value={costumer.name} onChange={handleInput}/>
                </div>
                <div>
                    <label for="address"> Address </label>
                    <input id="address" type="text" value={costumer.address} onChange={handleInput}/>
                </div>
                <button class="button" type="submit">Purchase</button>
            </form>
        </>
    )
}

export default Cart;