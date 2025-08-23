function LinkButton(props){
    return(
        <div className="Links">
            <button><a href={props.link}></a></button>
        </div>
    )
}
export default LinkButton;