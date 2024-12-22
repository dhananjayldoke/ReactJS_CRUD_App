import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateComp() {
    // declared each state for each component
    const [id,setId]=useState();
    const [ename,setEname]=useState();
    const [salary,setSalary]=useState();

    const nav=useNavigate();

    const saveEmp=()=>{
        let emp={id,ename,salary};

        // we are passing database call and obj to axios post service for CURD operation
        axios.post("http://localhost:3000/employee",emp)
        .then((result)=>{ // if successfully completed then
            console.log("saved");
            console.log(result.data);
            // we navigating/redirecting that component to view component to view page
            nav("/view") ;
        })
        .catch((err)=>{console.log(err)})
    }

    return <>
        <h1>Create Comp</h1>
        {/* creating text fields to take input from user | on change event it will updating data*/}
        Id <input type="text" onChange={(e)=>{setId(e.target.value)}}></input><br></br>
        Name <input type="text" onChange={(e)=>{setEname(e.target.value)}}></input><br></br>
        salary <input type="text" onChange={(e)=>{setSalary(e.target.value)}}></input><br></br>
        {/* on button click event it will first creating obj */}
        <input type="button" value="save" onClick={saveEmp}></input>
    </>
}