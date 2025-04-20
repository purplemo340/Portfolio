import { useState } from 'react'
function Button(props){
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
    return(
        <button onClick={()=>{
            props.func(proj);
              }
              }>
                {props.name}
        </button>
    )
}
export default Button