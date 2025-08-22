
import PropTypes from 'prop-types';

function Post(props){
    return(
        <div className='post'>
            
                   <div> <a href={props.link}><img className='post_image' src={props.image}></img></a></div>
            <div className='title'><h1>{'#'+props.title}</h1></div>
                
               

        </div>
    )
}

Post.propTypes = {
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    title: PropTypes.string
};

export default Post