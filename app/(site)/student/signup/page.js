"use client"

import {signUpStudent} from "./actions.js"

export default function StudentPage () {
 
  return (
    <div className="min-h-[calc(100vh-5rem)] flex justify-center items-center bg-white text-black">
      <form action={signUpStudent} className="flex flex-col gap-2 w-full max-w-sm mx-auto border bg-white border-white rounded-xl p-6 shadow-lg">
      <h1 className = "mb-4 text-xl font-bold text-center tracking-wide">Sign up</h1>
      <label className = "text-sm font-bold">Email</label>
      <input name = "email" type = "email" className = "border border-gray-600 bg-black rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
      <label className = "text-sm font-bold">Password</label>
      <input name = "password" type = "password" className = "border border-gray-600 bg-black text-gray-100 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
      <button type = "submit" className = "self-center cursor-pointer bg-yellow-400 text-black font-bold px-4 py-2 rounded-xl shadow-lg hover:transform transition-transform duration-200 hover:scale-105 mt-4">Submit</button>
    </form>
    </div>  
  );
}