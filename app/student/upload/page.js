"use client"

import { uploadStudentItem } from "./actions";


export default function Upload() {
    
  return (
    <div className = "flex items-center min-h-screen max-w flex-col">
        <h1 className="text-3xl flex item-center font-bold mt-2">Upload Page</h1>
        <form className = "flex flex-col mt-15">
            <label>Item:</label>
            <input name = "item" className = "border" type = "text" placeholder = "" required/>
            <label >Location:</label>
            <input name = "location" className = "border" type = "text" placeholder = "" required/>
            <label>Description:</label>
            <input name = "description" className = "border" type = "text" placeholder = "" required/>
            <button formAction = {uploadStudentItem}className = "border px-2 py-1 mt-3 cursor-pointer">Submit</button>            
        </form>
    </div>
  )
}