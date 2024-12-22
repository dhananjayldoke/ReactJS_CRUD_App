import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewComp from "./ViewComp";
import CreateComp from "./CreateComp";
import UpdateComp from "./UpdateComp";
import DeleteComp from "./DeleteComp";
{/* here we have imported specific dependent components from "react-router-dom" */}


{/* here we have imported specific pages from particular paths which we are going to use*/}



export default function MainApp() {
    return (
        <>
            <h1>CRUD Main APP</h1>
            {/* here we have created hyperlinks to jump to that particular pages */}
            <a href="/view">View</a> &nbsp;&nbsp;&nbsp;
            <a href="/create">Create</a>&nbsp;&nbsp;&nbsp;
            <a href="/update">Update</a>&nbsp;&nbsp;&nbsp;
            <a href="/delete">Delete</a>&nbsp;&nbsp;&nbsp;
            <BrowserRouter>
                <Routes>
                    {/* In Route, we bind path with specific component(element) */}
                    <Route path="/view" element={<ViewComp></ViewComp>}></Route>
                    <Route path="/create" element={<CreateComp />}></Route>
                    <Route path="/update" element={<UpdateComp />}></Route>
                    <Route path="/delete" element={<DeleteComp />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
