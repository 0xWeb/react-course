import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"

import "./Cart.css"
import { useCart } from "../hooks/useCart"


const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
    return (
        <li >
            <img src={thumbnail} alt="" />
            <div>
                <strong>{title}</strong>${price}
            </div>

            <footer>
                <small>
                    Qty:{quantity}
                </small>
                <button onClick={addToCart}>
                    +
                </button>
            </footer>

        </li>
    )
}


function Cart() {

    const { cart, clearCart, addToCart } = useCart()

    const cartCheckbox = useId()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckbox}>
                <CartIcon />
            </label>
            <input id={cartCheckbox} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {
                        cart.map((product) => {
                            return (
                                <CartItem
                                    key={product.id}
                                    addToCart={() => addToCart(product)}
                                    {...product} />
                            )
                        })
                    }
                </ul>
                <button onClick={() => clearCart()}>
                    <ClearCartIcon />
                </button>
            </aside>

        </>
    )
}

export default Cart