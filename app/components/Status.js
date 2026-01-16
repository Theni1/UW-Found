"use client"

import {useState} from "react"

export default function Status({id}) {
    const [info, setInfo] = useState (null)
    const [data, setData] = useState (null)
    async function claimItem (e) {
        e.preventDefault();
       const res = await fetch(`/api/${id}/claim`,{
            method: "POST",
            body: JSON.stringify({info}),
        })
        const results = await res.json()
        setData(results)
    }
    return (
        <>
        <form onSubmit = {claimItem}>
            <label className="text-xl font-semibold mb-2">Info:</label>
            <input onChange = { (e) => setInfo(e.target.value)} className = "border mx-4 rounded-lg"name = "info" placeholder = ""/>
            <button type = "submit" className= "mt-5 cursor-pointer inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-xl shadow-lg hover:transform transition-transform duration-200 hover:scale-105">Request a claim</button>
        </form>
        <p className = "text-small">{data ? data?.data : ""}</p>
        </>
    )
}