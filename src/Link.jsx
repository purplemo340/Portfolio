import PropTypes from 'prop-types';

function Link(props){
    return(
        
            <a className="link center" href={props.link} target="_blank"><button>{props.name}</button></a>
        
    )
}

Link.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string
};
export default Link;
