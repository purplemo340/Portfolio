import Posts from './Posts.jsx';
function Intro(){

    return(
        <div class='intro'>
            <div>
                <img class='profile' src="profile_img.jpg"></img>
                <h3 class='profile-info'>Monae Edmead</h3>
                <p class='profile-info'>Thank you for visiting my profile. This page is a documentation of my completed work. </p>
            </div>
            <button>linkedin</button>
            <button>github?</button>
            <button>resume</button>
            <button>contact</button>
            <Posts />
        </div>
    )
}
export default Intro