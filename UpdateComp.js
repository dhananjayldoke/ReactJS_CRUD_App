import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function UpdateComp() {

    const [id,setId]=useState();
    const [ename,setEname]=useState();
    const [salary,setSalary]=useState();

    const nav=useNavigate();

    const getEmp=()=>{
        // on button click, it passing id to database and we getting obj related to that id
        axios.get("http://localhost:3000/employee/"+id)
        .then((result)=>{
            console.log(result.data);
            // we are getting the states of ename and salary of that particular id 
            setEname(result.data.ename);
            setSalary(result.data.salary);
        })
        .catch((err)=>{console.log(err)})
    }

    const updateEmp=()=>{
        // using axios put service, to we have passed id value to url for CURD operation
        // we are passing particular id and value states related to that id that we want to update
        // it will updated new state values in obj of that id 
        axios.put("http://localhost:3000/employee/"+id,{"ename":ename,"salary":salary})
        .then((result)=>{
            console.log(result.data);

            // we navigating/redirecting that component to view component to view page
            nav("/view");
        })
        .catch((err)=>{console.log(err)})
    }
    return <>
        <h1>Update Comp</h1>
        {/* for input we have declared state | change that state based upon change event  */}
        Enter the id<input type="text" onChange={(e)=>{setId(e.target.value)}}></input><br></br>
        <input type="button" value="show" onClick={getEmp}></input><br></br>

        {/* we are displaying some obj related to that id | 
        from get service, states are geting copied in text fields, we can modify them*/}
        Name <input type="text" value={ename} onChange={(e)=>{setEname(e.target.value)}}></input><br></br>
        salary <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}}></input><br></br>

        {/* And on button click event, it will call updateEmp method*/}
        <input type="button" value="update" onClick={updateEmp}></input>
    </>
}