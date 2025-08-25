
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import projects from './projects'
import skills from './skills'
import { useState } from 'react'
import Projects from "./components/Projects.jsx";
import Proj from "./Proj.jsx";
import Intro from "./Intro.jsx";
import Project from './Project'
import list from "./list.js";
import {useParams} from "react-router-dom";

function pic(id){
    if(list[id]!= undefined){
        return <img src={"/images/"+list[id].media} alt={list[id].name} />;
    }
}
function Proj1(){
    const id = useParams();
    return(
        
        <div>
            
            <h1>{list[id.id - 1].name}</h1>
            <div className='center'>
            {pic(id.id - 1)}
            </div>
            <div className='center'>
            <a href={list[id.id - 1].Link} target='_blank'>Click to visit website</a>
            </div>
            <p>{list[id.id - 1].description}</p>
            <ul>
                {list[id.id - 1].bullets.map((bullet) => {
                    return (
                        <li>
                            {bullet}
                        </li>
                    )
                })}
            </ul>
            
            <h1>Skills</h1>
            <ul>
                {list[id.id - 1].skills.map((skill) => {
                    return (
                        <li>
                            {skill}
                        </li>
                    )
                })}
            </ul>
            <h1>Possible Improvements</h1>
            <ul>
                {list[id.id - 1].Improvements.map((improvement) => {
                    return (
                        <li>
                            {improvement}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};
// Home Page Component
const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Intro />
            <div className='profile-info'>
            <button onClick={() =>
                 navigate("/choices")}>Click Me!</button>
                 </div>
        </div>
    );
};
const Projects1 = () => {
  const [proj, setProj] = useState(0);
  function createProject(project){
	return <Project
	name={project.name}
	img={project.img}
	link={project.link}
	id={project.id}
	/>
	
  }
  //display next project
  function nextProject(){
	if(proj < projects.length -1 ){
	setProj((proj)=> proj+1)
	}
  }
  //display previous project
  function prevProject(){
	if(proj >=1){
	setProj((proj)=> proj-1)
	}
  }
  
  function currentProject(current){
	return <Project
	name={projects[current].name}
	img={projects[current].img}
	link={projects[current].link}
	id={projects[current].id}
	inc={nextProject}
	dec={prevProject}
	/>
  }
  
  return (

      <div>
		
		{currentProject(proj)}
		
		
		<h2> Skills</h2>
		<ul>
		{skills.map((skill) => {
			return (
				<li>
					{skill.name}
				
				</li>
			)
		}
	)}
	</ul>
	
    </div>
  )
};
const Choices = () => {
    return(
        <div>
            <h1>Click on each picture to learn more!</h1>
            <button >Portfolio</button>
            <button>Contact</button>
            <button>Hobbies</button>
        </div>
    )
}


function App() {
    
    
    return (
        <div>
        <Router>
            
            {/*Implementing Routes for respective Path */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Projects" element={<Projects />}/>
                <Route path="/Projects1" element={<Projects1 />}/>
                <Route path="Project/:id" element={<Proj />}/>  
                <Route path="/choices" element={<Choices />}/>
            </Routes>
        </Router>
        
        </div>
    ); 
}

export default App;