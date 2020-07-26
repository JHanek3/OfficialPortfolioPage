import React, {useContext} from "react"
import "../../compCSS/PicSome.css"
import {Link} from "react-router-dom"
import {Context} from "../../context/PicSomeContext"

function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header className="picSomeHeader">
            <Link to="/PicSome"><h2>Pic Some</h2></Link>
            <Link to="/Picsome/Cart"><i className={`${cartClassName} ri-fw ri-2x`}></i></Link>
        </header>
    )
}

export default Header
