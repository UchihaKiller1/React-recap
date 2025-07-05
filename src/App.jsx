
import {BrowserRouter, Routes,Route} from "react-router-dom";
import AdminDashboard from "./pages/admin/adminDashboard.jsx";
import HomePage from "./pages/home/homePage.jsx";
import Testing from "./components/testing.jsx";

function App() {

    return(

        <BrowserRouter>
            <Routes path = '/*'>
            
                <Route path="/*" element={<HomePage></HomePage>}/>
                <Route path = "/admin/*" element={<AdminDashboard/>}/>
                <Route path="/testing" element={<Testing></Testing>}></Route>


            </Routes>
        </BrowserRouter>

    )

}

export default App
