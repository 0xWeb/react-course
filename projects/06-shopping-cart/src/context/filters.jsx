import { createContext } from "react";

// Create the context

export const FiltersContext = createContext()

//Create the provider to provide the context

export function FilterProvider({ children }) {
    return (
        <FiltersContext.Provider
            value={{
                category: 'all',
                minPrice: 0
            }}
        >
            {children}
        </FiltersContext.Provider>
    )
}