import { useState } from "react";

export default function Testing(){

    const[count,setCount]= useState(0)

    return(

        <div className="w-full h-screen bg-amber-100">
        <h1>{count}</h1>
        <button className="bg-amber-50 m-1" onClick={()=>{

           const newCount = count+1;
           setCount(newCount);
            console.log("Clicked!");

        }}>Click</button>
        </div>
    )
}