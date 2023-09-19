import './App.css'
import TwitterFollowCard from './Components/TwitterFollowCard'

function App() {


    const RKX = { userName: '0xRKX', name: '0xRKX.eth', initialIsFollowing: true }
    return (
        <section className='App'>
            <TwitterFollowCard {...RKX} />

            <TwitterFollowCard
                userName={'draeneris'}
                name={'drae.eth'}
                initialIsFollowing={false}
            />

            <TwitterFollowCard
                userName={'Pedr0_DC'}
                name={'Pedro DC'}
                initialIsFollowing={true}
            />
        </section>
    )
}

export default App