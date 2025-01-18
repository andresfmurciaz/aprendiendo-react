
import { TwitterFollowCard } from './TwitterFollowCard';
export function App()
{
    const helloAdd = (userName)  => `#${userName}`
 
    return(
    <section className='App'>
    <TwitterFollowCard 
        helloAdd = {helloAdd}
        isFollowing 
        userName="midudev"
        name="miguel" />



        <TwitterFollowCard 
        helloAdd = {helloAdd}
        isFollowing={false} 
        userName="andres" 
        name="andres murcia"/>
    </section>
    )
}