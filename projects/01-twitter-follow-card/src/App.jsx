import './App.css'
import TwitterFollowCard from './Components/TwitterFollowCard'

function App() {


    const RKX = { userName: 'Google', name: 'Google', initialIsFollowing: true }
    return (
        <section className='App'>
            <TwitterFollowCard {...RKX} />

            <TwitterFollowCard
                userName={'github'}
                name={'Github'}
                initialIsFollowing={false}
            />

            <TwitterFollowCard
                userName={'reactjs'}
                name={'React'}
                initialIsFollowing={true}
            />
        </section>
    )
}

export default App