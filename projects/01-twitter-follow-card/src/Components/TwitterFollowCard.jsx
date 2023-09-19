import { useState } from "react"

function TwitterFollowCard({ userName, name, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttontClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={imageSrc}
                    alt="Avatar of 0xRKX" />
                <div className='tw-followCard-info'>
                    <strong>
                        {name}
                    </strong>
                    <span className='tw-followCard-infoUserName'>
                        @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttontClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}

export default TwitterFollowCard