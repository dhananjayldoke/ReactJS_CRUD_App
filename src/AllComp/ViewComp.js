import { useState,useEffect } from "react"
import axios from "axios";
export default function ViewComp() {
    // declared each state for each component Array of Object we have declared here
    const [allemp,setAllemp]=useState([{"id":999,"ename":"abc","salary":11111}])
    const getAllEmp = () => {
        // using axios get service for CURD operation
        axios.get("http://localhost:3000/employee")
        .then((result)=>{setAllemp(result.data)}) // if successfully completed then
        .catch((err)=>{console.log(err)}) // if there is any error 
    }
    // Array of Object we have created useEffect here
    useEffect(()=>{
        getAllEmp();
    })
    return <>
        <h1>View Comp</h1>
        <table border="1px" align="center" cellSpacing="5px" cellPadding="5px">
            <thead>
                <tr>
                    <th>Emp id</th>
                    <th>Emp name</th>
                    <th>Emp salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    allemp.map(
                        (emp,index)=>(
                            <tr> 
                                <td>{emp.id}</td>
                                <td>{emp.ename}</td>
                                <td>{emp.salary}</td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    </>
}