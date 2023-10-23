import Filters from "./Filters"

function Header({ changeFilters }) {
    return (
        <header>
            <h1>React Shop</h1>
            <Filters changeFilters={changeFilters} />
        </header>
    )
}

export default Header