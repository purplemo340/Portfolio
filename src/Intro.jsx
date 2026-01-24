import Posts from './Posts.jsx';
import postsInfo from "./postsInfo"
import projects from './projects';
import Links  from './Links.jsx';
function Intro(){

    return(
        <div className='intro'>
            <div className='intro_text'>
            <div className='grid_image'>
                <img className='profile' src="/images/profile_img.jpg"></img>
            </div>
            <div className='profile_list'>
                <div className="center">
                <h3 className='profile-info center'>Monae Edmead</h3>
                </div>
                <div className="center">
                <p className='profile-info'>Thank you for visiting my profile. Click on each link and image below to learn more about my projects. </p>
                </div>
                <Links />
                <hr></hr>
                <div className='profile_stats'> 
                <div>
                    <p>Posts</p>
                    <p>{postsInfo.length}</p>
                </div>
                <div>
                    <p>Projects</p>
                    <p>{projects.length}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{postsInfo.length}</p>
                </div>
                </div>
                
            </div>
        </div>
            <div className='center'>
           
           </div>
            <Posts />
        </div>
    )
}
export default Intro