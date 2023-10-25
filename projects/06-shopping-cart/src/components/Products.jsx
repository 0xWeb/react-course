import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useFilters } from '../hooks/useFilter'
import { useCart } from '../hooks/useCart'


function Products() {

    const { filteredProducts } = useFilters()
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {filteredProducts.slice(0, 10).map((product) => {
                    const isProductInCart = checkProductInCart(product)
                    const buttonClassName = isProductInCart ? 'red' : '#099f'
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                                <p>{product.description}</p>
                            </div>
                            <div>
                                <button style={{ backgroundColor: buttonClassName }} onClick={() => {
                                    isProductInCart ? removeFromCart(product) : addToCart(product)
                                }}>

                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Products