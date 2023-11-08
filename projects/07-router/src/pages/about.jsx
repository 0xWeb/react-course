
import { Link } from '../Link'

export default function AboutPage() {
    return (
        <>
            <h1>
                About
            </h1>
            <img src="https://avatars.githubusercontent.com/u/99775980?v=4" width={'300px'} alt="" />
            <p>
                This is a example page to create a React Router in about page
            </p>
            <Link to={'/'} >Home</Link>
        </>
    )
}