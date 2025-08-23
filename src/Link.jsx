function Link(props){
    return(
        <div className="Links">
            <a className="link" href={props.link}><button>{props.name}</button></a>
        </div>
    )
}
export default Link;
