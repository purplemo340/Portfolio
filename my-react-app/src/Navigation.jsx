function Navigation() {
    
  
    return (
        <div class="nav-1">
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
			  <a class="navbar-brand" href="#">Menu</a>
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				  <li class="nav-item">
					<a class="nav-link active" aria-current="page" href="index.html">Home</a>
				  </li>
				  
				  <li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					  Projects
					</a>
                    </li>
					<ul class="dropdown-menu">
					  <li><a class="dropdown-item" href="projects/handwriting">Handwriting Recognition</a></li>
					  <li><a class="dropdown-item" href="projects/smart_garage">Smart Parking Garage</a></li>
					  
					  <li><a class="dropdown-item" href="projects/tracker">Sleep Tracker</a></li>
					  <li><a class="dropdown-item" href="projects/detection">Blind Detection Device</a></li>
					  <li><a class="dropdown-item" href="#">Personal Website</a></li>
					  <li><a class="dropdown-item" href="projects/movie">IMDB Movie Ratings</a></li>
					  <li><a class="dropdown-item"  href="#">Language Learning Game</a></li>
					  <li><a class="dropdown-item" href="https://library-mcuo.onrender.com">Library Website</a></li>

					  <li><a class="dropdown-item" href="https://olympics-iszt.onrender.com">Olympics Data Tracking</a></li>
					</ul>
                    </ul>
				  
			  </div>
			</div>
		  </nav>
		  </div>
    )
  }
  
  export default Navigation