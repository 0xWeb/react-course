import { createContext, useState } from "react";

// Create the context

export const FiltersContext = createContext()

//Create the provider to provide the context

export function FilterProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider
            value={{ filters, setFilters }}
        >
            {children}
        </FiltersContext.Provider>
    )
}