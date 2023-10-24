import { useId, useState } from 'react'
import './Filter.css'



function Filters({ changeFilters }) {

    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice
        }))
    }

    const handleChangeCategory = (e) => {
        changeFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Min Price:</label>
                <input
                    type="range"
                    name="range"
                    id={minPriceFilterId}
                    min={'0'}
                    max={'2000'}
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value={'all'}>All</option>
                    <option value={'laptops'}>Laptops</option>
                    <option value={'smartphones'}>Smartphones</option>
                </select>
            </div>
        </section>
    )
}

export default Filters