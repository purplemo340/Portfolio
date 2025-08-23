import projects from "./projects" 

function Header() {
    
  
    return (
       <div>
        
		<div className="head">
		<h1>Portfoligram</h1>
		<br/>
	</div>
    <div className="navigation">
    <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid gray">
    <a className="navbar-brand" href="#">Menu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/projects">Projects</a></li>
            <li><hr className="dropdown-divider"/></li>
            {projects.map((project) => {
                return (
                    <li><a className="dropdown-item" href={"/Projects/"+project.id}>{project.name}</a></li>
                    
                )
            })}
            
          </ul>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
</div>
    </div>
    )
  }
  
  export default Header
  