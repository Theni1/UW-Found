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
            <label>Info:</label>
            <input onChange = { (e) => setInfo(e.target.value)} className = "border mx-4"name = "info" placeholder = ""/>
            <button type = "submit" className = "border px-1 py-2 rounded-xl cursor-pointer">Request a claim</button>
        </form>
        <p className = "text-small">{data ? data?.data : ""}</p>
        </>
    )
}