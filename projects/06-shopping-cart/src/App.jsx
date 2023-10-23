import { products as initialProducts } from "./mocks/products.json"
import Products from "./components/Products"
import { useMemo, useState } from "react"
import Header from "./components/Header"

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

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

  console.log(filterP);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterP} />
    </>
  )
}

export default App
