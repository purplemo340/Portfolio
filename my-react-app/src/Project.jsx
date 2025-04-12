
import projects from './projects'
function Project(props) {
    
  
    return (
        <div className='project'>
		<div className="center">
		<img src={"images/"+props.img}/>
        </div>
        <div className="center">
		<button onClick={()=>{
        props.nextProject;
          }}href={"projects/"+props.link}>{props.name}</button>
        </div>
	</div>
    )
  }
  
  export default Project