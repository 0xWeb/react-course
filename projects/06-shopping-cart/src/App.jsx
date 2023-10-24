import { products as initialProducts } from "./mocks/products.json"
import { useContext, useMemo, useState } from "react"

import Products from "./components/Products"
import Header from "./components/Header"
import Footer from "./components/Footer"

import { FiltersContext } from "./context/filters"

function useFilters() {
  const [products] = useState(initialProducts)
  const filters = useContext(FiltersContext)

  const setFilters = () => { }

  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

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

  const filterP = useMemo(() => filterProducts(products), [filters])

  return { setFilters, filterP }
}

function App() {
  const { setFilters, filterP, } = useFilters()

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterP} />
      <Footer />
    </>
  )
}

export default App
