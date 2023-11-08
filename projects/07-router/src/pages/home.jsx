import { Link } from "../Link";


export default function HomePage() {
    return (
        <>
            <h1>
                Home
            </h1>
            <p>
                This is a example page to create a React Router
            </p>
            <Link to={'/about'} >About</Link>
        </>
    )
}