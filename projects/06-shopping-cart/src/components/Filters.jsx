import { useId } from 'react'
import './Filter.css'
import { useFilters } from '../hooks/useFilter'



function Filters() {

    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
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
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
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