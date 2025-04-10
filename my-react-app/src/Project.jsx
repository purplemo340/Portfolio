function Project(props) {
    
  
    return (
        <div>
		
		<img src={"images/"+props.img}/>
			<a class='btns' href={"projects/"+props.link}>{props.name}</a>
	</div>
    )
  }
  
  export default Project