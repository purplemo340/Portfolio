import projects from "./projects" 
function Header() {
    
  
    return (
       <div>
        
		<div className="head">
		<h1>Portfoligram</h1>
		<br/>
	</div>
    <div class="navigation">
    <nav class="navbar navbar-expand-lg  ">
  <div class="container-fluid gray">
    <a class="navbar-brand" href="#">Menu</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/projects">Projects</a></li>
            <li><hr class="dropdown-divider"/></li>
            {projects.map((project) => {
                return (
                    <li><a class="dropdown-item" href={"/Projects/"+project.id}>{project.name}</a></li>
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
  