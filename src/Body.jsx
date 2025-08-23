import { useState } from 'react'

import Project from './Project'
import Footer from './Footer'
import projects from './projects'

import skills from './skills'
function Body() {
  const [proj, setProj] = useState(0);
  
  function nextProject(){
	if(proj < projects.length -1 ){
	setProj((proj)=> proj+1)
	}
  }
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

export default Body;
