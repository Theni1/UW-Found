"use client"
import {loginStudent} from "./actions.js"
import { useSearchParams } from "next/navigation.js";

export default function StudentPage () {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  return (
    <div className = "min-h-[calc(100vh-5rem)] flex justify-center items-center bg-white text-black">
    <form action = {loginStudent} className = "flex flex-col gap-2 w-full max-w-sm mx-auto border border-white rounded-xl p-6 shadow-lg">
      <h1 className = "mb-4 text-xl font-bold text-center tracking-wide">Log in</h1>
      <label className = "text-sm font-bold">Email</label>
      <input name = "email" type = "email" className = "border border-gray-600 bg-black text-gray-100 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
      <label className = "text-sm font-bold">Password</label>
      <input name = "password" type = "password" className = "border border-gray-600 bg-black text-gray-100 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
      <p className = "text-red-700">{error ? error : ""}</p>
      <button className = "self-center cursor-pointer bg-yellow-400 text-black font-bold px-4 py-2 rounded-xl shadow-lg hover:transform transition-transform duration-200 hover:scale-105 mt-4" type = "submit">Submit</button>
    </form>
    </div>  
  );
}