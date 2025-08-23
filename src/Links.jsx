import links from "./links";
import Link from "./Link.jsx";
function Links(){
    return(
        <div className='links'>
            {links.map((link) => {
                return(
                <Link 
                name={link.name} 
                link={link.url} />)
            })
            }
        </div>
    )
}
export default Links;