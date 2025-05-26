import React from "react"
import { useState } from "react"
export const Checkbox=()=>{
    const[skills,setskills]=useState([])
    const hanDelskills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked==true){
            setskills([...skills,event.target.value]) 
        }
        else{
            setskills([...skills.filter((item)=>item!=event.target.value)])
        }
        
    } 
    return(
        <div>
            <h3>Select your Skills</h3>
            <br />
            <input type="checkbox" onClick={hanDelskills} id="PHP" value={"PHP"} />
            <label htmlFor="PHP">PHP</label>
            <br />

             <input type="checkbox" id="JAVA" value={"JAVA"} onClick={hanDelskills}/>
            <label htmlFor="JAVA">JAVA</label>
            <br />

             <input type="checkbox" id="PYTHON"onClick={hanDelskills}/>
            <label htmlFor="PYTHON">PYTHON</label>


            <h1>{skills.toString()}</h1>
        </div>
    )
}