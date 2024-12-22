import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function DeleteComp() {
    // declared the state here
    const [id,setId]=useState();
    const nav=useNavigate();

    const deleteEmp=()=>{
        // using axios delete service we have passed id value to url for CURD operation
        axios.delete("http://localhost:3000/employee/"+id)
        .then(()=>{// if successfully completed then
            // if id record getting deleted we give pop up message
            alert("emp record deleted");

            // we navigating/redirecting that component to view component to view page
            nav("/view");
        })
        .catch((err)=>{console.log(err)}) // if there is any error 
    }

    return <>
        <h1>Delete Comp</h1>
        {/* for the input declare the state | update the value based on event */}
        Enter the id<input type="text" onChange={(e)=>{setId(e.target.value)}}></input>

        {/* On button click event we are using axios delete service */}
        <input type="button" value="delete" onClick={deleteEmp}></input>
    </>
}