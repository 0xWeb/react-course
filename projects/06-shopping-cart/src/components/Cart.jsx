import { useId } from "react"
import { CartIcon } from "./Icons"

import "./Cart.css"


function Cart() {
    const cartCheckbox = useId()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckbox}>
                <CartIcon />
            </label>
            <input id={cartCheckbox} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="" />
                        <div>
                            <strong></strong>$
                        </div>

                        <footer>
                            <small>
                                Qty:
                            </small>
                            <button>
                                +
                            </button>
                        </footer>

                    </li>
                </ul>
            </aside>

        </>
    )
}

export default Cart