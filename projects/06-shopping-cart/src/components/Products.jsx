import './Products.css'
import { AddToCartIcon } from './Icons'
import { useFilters } from '../hooks/useFilter'


function Products() {

    const { filteredProducts } = useFilters()

    return (
        <main className='products'>
            <ul>
                {filteredProducts.slice(0, 10).map((product) => {
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                                <p>{product.description}</p>
                            </div>
                            <div>
                                <button>
                                    <AddToCartIcon />
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