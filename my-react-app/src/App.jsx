
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
    useParams
} from "react-router-dom";

import Projects from "./Projects.jsx";
import Hand from "./projectsFolder/handwriting/Hand.jsx";
import Proj from "./projectsFolder/Proj.jsx";
import Intro from "./Intro.jsx";
// Home Page Component
const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Intro />
            <div class='profile-info'>
            <button onClick={() =>
                 navigate("/choices")}>Click Me!</button>
                 </div>
        </div>
    );
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
                <Route path="/Projects" element={<Projects />}>
                 
                </Route>
                <Route path="/Projects/:id" element={<Proj />}/>  
                <Route path="/choices" element={<Choices />}/>
            </Routes>
        </Router>
        
        </div>
    );
}

export default App;