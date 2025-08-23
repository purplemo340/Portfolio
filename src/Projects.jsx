import { useState } from 'react'
import ReactDOM from "react-dom/client";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Project from './Project'
import Footer from './Footer'
import Navigation from './Navigation'
import projects from './projects'
import Button from './Button'
import skills from './skills'

//function for slide of projects. Not in use???
function Projects() {
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
	
	
    <Footer/>
    </div>
  )
}

export default Projects;
