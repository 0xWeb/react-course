import { useState } from 'react'
import './Filter.css'


function Filters({ changeFilters }) {

    const [minPrice, setMinPrice] = useState(0)

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
                <label htmlFor="price">Min Price:</label>
                <input
                    type="range"
                    name="range"
                    id="price"
                    min={'0'}
                    max={'2000'}
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <select id="category">
                    <option value={'all'}>All</option>
                    <option value={'laptops'}>Laptops</option>
                    <option value={'smartphones'}>Smartphones</option>
                </select>
            </div>
        </section>
    )
}

export default Filters