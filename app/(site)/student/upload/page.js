"use client"

import { uploadStudentItem } from "./actions";


export default function Upload() {
    
  return (
    <div className = "flex items-center min-h-screen max-w flex-col">
        <h1 className="text-3xl flex item-center font-bold mt-5">Upload Page</h1>
        <form className = "flex flex-col mt-15 gap-1">
            <label className = "text-sm font-medium">Item:</label>
            <input name = "item" className = "pl-2 border rounded-lg" type = "text" placeholder = "" required/>
            <label className = "text-sm font-medium" >Location:</label>
            <input name = "location" className = "pl-2 border rounded-lg" type = "text" placeholder = "" required/>
            <label className = "text-sm font-medium">Description:</label>
            <input name = "description" className = "pl-2 border rounded-lg" type = "text" placeholder = "" required/>
            <button formAction = {uploadStudentItem} className= "mt-5 cursor-pointer inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-xl shadow-lg hover:transform transition-transform duration-200 hover:scale-105">Submit</button>            
        </form>
    </div>
  )
}