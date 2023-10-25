import { useContext, useMemo, useState } from "react"
import { FiltersContext } from "../context/filters"

import { products as initialProducts } from "../mocks/products.json"

export function useFilters() {
    const [products] = useState(initialProducts)
    const { filters, setFilters } = useContext(FiltersContext)

    const filterProducts = (products) => {
        return products.filter((product) => {
            return (
                product.price >= filters.minPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })
    }

    const filteredProducts = useMemo(() => filterProducts(products), [filters])

    return { setFilters, filteredProducts, filters }
}