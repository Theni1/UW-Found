"use client"

import {signUpStudent} from "./actions.js"

export default function StudentPage () {
 
  return (
    <div className = "mx-auto max-w-sm min-h-screen flex justify-center">
    <form className = "flex flex-col gap-4">
      <h1 className = "mb-4 text-xl font-semibold">Sign up</h1>
      <label>Email</label>
      <input name = "email" type = "email" placeholder = "name@uwaterloo.ca" className = "border p-1"/>
      <label>Password</label>
      <input name = "password" type = "password" placeholder = "*********" className = "border p-1"/>
      <button formAction = {signUpStudent} className = "cursor-pointer hover:bg-gray-50 border p-2" type = "submit">Submit</button>
    </form>
    </div>  
  );
}