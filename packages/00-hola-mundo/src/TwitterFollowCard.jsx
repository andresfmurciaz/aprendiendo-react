import './App.css'
import { useState } from 'react';
export function TwitterFollowCard ({helloAdd , userName , name }){
    
    
    const [isFollowing , setIsFollowing] = useState(false)
    
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }


    const follow = isFollowing ? 'Siguiendo' : 'Seguir'  
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'> 
            <img className="tw-followCard-img" src={ ` https://unavatar.io/x/${userName}`} alt="img" />
            <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className="tw-followCard-infoUserName">{helloAdd(userName)}</span>
        </div>        
        </header>
                
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                {follow}
            </button>
        </aside>

    </article>
    )
}