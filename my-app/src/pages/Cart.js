import React, {useState, useContext} from "react"
import Header from "../components/PicSomeHeader"
import "../compCSS/PicSome.css"
import {Context} from "../context/PicSomeContext"
import CartItem from "../components/PicSomeCartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (

        <div className="cart-page">
            <Header />
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            {
                cartItems.length > 0 ?
                    <div className="order-button">
                        <button onClick={placeOrder}>{buttonText}</button>
                    </div> :
                    <p>You have no items in your cart.</p>
            }
        </div>
    )
}

export default Cart