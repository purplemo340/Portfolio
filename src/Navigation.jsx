function Navigation() {
    
  
    return (
        <div className="nav-1">
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
			  <a className="navbar-brand" href="#">Menu</a>
			  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				  <li className="nav-item">
					<a className="nav-link active" aria-current="page" href="index.html">Home</a>
				  </li>
				  
				  <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					  Projects
					</a>
                    </li>
					<ul className="dropdown-menu">
					  <li><a className="dropdown-item" href="projects/handwriting">Handwriting Recognition</a></li>
					  <li><a className="dropdown-item" href="projects/smart_garage">Smart Parking Garage</a></li>
					  
					  <li><a className="dropdown-item" href="projects/tracker">Sleep Tracker</a></li>
					  <li><a className="dropdown-item" href="projects/detection">Blind Detection Device</a></li>
					  <li><a className="dropdown-item" href="#">Personal Website</a></li>
					  <li><a className="dropdown-item" href="projects/movie">IMDB Movie Ratings</a></li>
					  <li><a className="dropdown-item"  href="#">Language Learning Game</a></li>
					  <li><a className="dropdown-item" href="https://library-mcuo.onrender.com">Library Website</a></li>

					  <li><a className="dropdown-item" href="https://olympics-iszt.onrender.com">Olympics Data Tracking</a></li>
					</ul>
                    </ul>
				  
			  </div>
			</div>
		  </nav>
		  </div>
    )
  }
  
  export default Navigation