import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Project from './Project'
import Footer from './Footer'
import Navigation from './Navigation'
import projects from './projects'

function App() {
  const [count, setCount] = useState(0)
  function createProject(project){
	return <Project
	name={project.name}
	img={project.img}
	link={project.link}
	/>
  }
  return (

      <div>
		
        <div id="projects" className= "flex-center flex-column">
         {projects.map(createProject)}
        </div>
        <h2>Relevant Classes</h2>
		<ul>
			<li>Engineering Electronics</li>
			<li>Network Security</li>
			<li>Data Structures</li>
			<li>Circuit Analysis I</li>
			<li>Data Collection and Analysis</li>
			<li>Computer Operations and Interfaces</li>
			<li>Device Networks</li>
			<li>VHDL Design with FPGAs</li>
			<li>Computer Engineering Fundamentals</li>
			<li>C++ Programming for Engineers</li>
			<li>Neural Networks for Machine Learning</li>
		</ul>
		<h2> Skills</h2>
		<div className="flex-center">
		<img src="languages.png"/> 
		</div>
		<ul>
			<li>Python</li>
			<li>C</li>
			<li>C++</li>
			<li>Javascript</li>
			<li>HTML</li>
			<li>CSS</li>
			<li>Problem Solving</li>
			<li>Networking</li>
			<li>MATLAB</li>
			<li>Java</li>
			<li>Team Player</li>
			<li>Linux</li>
		</ul>
		
		<h2>More About Me</h2>
		<div className="flex-center">
			<a className="btns" href="/hobbies">Hobbies</a>
			{/* <!--a class="btns">Contact</a--> */}
		</div>
    <Footer/>
    </div>
  )
}

export default App;
