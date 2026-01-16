import {createClient} from "@/utils/supabase/server"
import {handleSubmit} from "./actions"

export default async function Posts() {
    const supabase =  await createClient()
    const result = await supabase.auth.getUser();
    const user = result.data.user;
    const { data: items } = await supabase
    .from("lost_items")
    .select(`
        id,
        title,
        location,
        description,
        status,
        claims (
        id,
        status,
        claimer_info
        )
    `)
  .eq("poster_id", user.id);
  
    if (!user) 
        redirect("/student/login");
    return (
        <div>
        <h1 className="text-3xl font-bold mb-8 text-center mt-5">My Posts</h1>
        {items ? items.map ( (item, index) => {
            const pendingClaim = item.claims?.find((claim) => claim.status === "Pending");
            return(
            <div className = "max-w-4xl mx-auto px-6 py-10 border rounded-lg mb-10" key = {item.id}>
                <h1 className="text-3xl font-bold mb-8">Claim {index + 1}</h1>
                <p className="text-xl font-semibold mb-2">Title: {item?.title}</p>
                <p className="text-xl font-semibold mb-2">Location: {item?.location}</p>
                <p className="text-xl font-semibold mb-2">Description: {item?.description}</p>
                <p className="text-xl font-semibold mb-2">{item?.status_info}</p>
                { pendingClaim ? 
                <div className="flex gap-4 mb-2">
                    <form action = {handleSubmit}>
                    <input type="hidden" name="item_id" value={item.id} />
                    <label className="flex items-center gap-1">
                    <input type="radio" name="claim_response" value="accepted"/> Accept</label>
                    <label className="flex items-center gap-1">
                    <input type="radio" name="claim_response" value="rejected"/> Reject </label>
                    <input className = "border" type = "text" name = "info"></input>
                    <button type = "submit" className= "mt-5 cursor-pointer inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-xl shadow-lg hover:transform transition-transform duration-200 hover:scale-105"> Submit </button>
                    </form>
                </div>
                : item.status == 'Claimed' ? <p className="text-xl font-semibold mb-2 text-green-600">Claimed</p>: <p className="text-xl text-red-600 font-semibold mb-2">No claims</p>}
            </div>
            )})
        : "No claims made"}
        </div>
    )
}