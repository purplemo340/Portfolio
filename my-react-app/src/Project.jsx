import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import { useState } from 'react'
function Project(props) {
    
  const [proj, setProj] = useState(0);
     
    return (
        <div >
            
		<div className="center">
        <button onClick={()=>{props.dec(proj)}}>&lt;</button>
		<img src={"images/"+props.img}/>
        <button onClick={()=>{props.inc(proj)}}>&gt;</button>
        </div>
        <div className="center">
		<button ><Link to={"/Projects/"+props.id}>{props.name}</Link></button>
        </div>
        
	</div>
    )
  }
  
  export default Project