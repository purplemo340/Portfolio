import Posts from './Posts.jsx';
//import postsInfo from "./postsInfo"
//import projects from './projects';
import Links  from './Links.jsx';
function Intro(){

    return(
        <div className='intro'>
            <div className='intro_text'>
            <div className='grid_image center'>
                <img className='profile' src="/images/profile_img.jpg"></img>
            </div>
            <div className='profile_list'>
                <div className="center">
                <p className='profile-info'>Thank you for visiting my portfolio. My name is Monae Edmead, a Computer 
                    Engineering Graduate with a profound desire to learn new things. This site is a testament to this.
                    I built this website while I learned React.js and I continue to document the projects that I 
                    complete on my free time. Click on each link and image below to learn more! </p>
                </div>
                <hr />
                <Links />
                <hr></hr>
                
            </div>
        </div>
            <Posts />
        </div>
    )
}
export default Intro