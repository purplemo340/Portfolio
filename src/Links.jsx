import links from "./links";
import Link from "./Link.jsx";
function Links(){
    return(
        <div className='links'>
            {links.map((link) => {
                return(
                <Link 
                key={link.id}
                name={link.name} 
                link={link.url} />)
            })
            }
        </div>
    )
}
export default Links;