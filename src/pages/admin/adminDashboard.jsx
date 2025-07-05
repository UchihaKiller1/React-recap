import {Routes, Route, Link} from "react-router-dom";


export default function AdminDashboard() {

    return(
        <div className= "w-full h-screen bg-green-200 flex" >
            <div className="w-[350px] h-screen bg-red-200">
                <button className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center" >Dashboard</button>

                <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">Items</Link>
                <Link to="/admin/reviews" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">Reviews</Link>
                <Link to="/admin/users" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">Users</Link>

            </div>
            <div className="bg-blue-200 w-[calc(100vw-350px)]">

                <Routes path="/*">
                    <Route path="/items" element={<h1>Items</h1>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>


                </Routes>
            </div>
        </div>
    )

}


