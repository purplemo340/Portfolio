
function Post(props){
    return(
        <div class='post'>
            
                   <div> <a href={props.link}><img class='post_image' src={props.image}></img></a></div>
            <div><h1>{'#'+props.title}</h1></div>
                
               

        </div>
    )
}
export default Post