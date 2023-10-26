import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";


export const CartContext = createContext()


function CartProvider({ children }) {

    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

