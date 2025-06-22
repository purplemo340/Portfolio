import list from './list.js';
import React from 'react';
import {useParams} from "react-router-dom";

function Proj(){
    const id = useParams();
    return(
        <div>
            <h1>{list[id.id - 1].name}</h1>
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
            <h1>Media</h1>
            <img src={"/images/"+list[id.id-1].media}/>
            
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
}

export default Proj