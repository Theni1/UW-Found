import {createClient} from "@/utils/supabase/server"
import {handleSubmit} from "./actions"

export default async function Posts() {
    const supabase =  await createClient()
    const result = await supabase.auth.getUser();
    const user = result.data.user;
    const { data: items, error } = await supabase
    .from("lost_items")
    .select()
    .eq("user_id", user.id);
    if (!user) 
        redirect("/student/login");
    return (
        <div>
        {items ? items.map ( (item) => {
            return(
            <div className = "border my-4 pl-4" key = {item.id}>
                <p>Title: {item?.title}</p>
                <p>Location: {item?.location}</p>
                <p>Description: {item?.description}</p>
                <p>Claim info: {item?.status_info}</p>
                {item.status == 'pending' ? 
                <>
                <div className="flex gap-4 mb-2">
                    <form action = {handleSubmit}>
                    <input type="hidden" name="item_id" value={item.id} />
                    <label className="flex items-center gap-1">
                    <input type="radio" name="claim_response" value="accepted"/> Accept</label>
                    <label className="flex items-center gap-1">
                    <input type="radio" name="claim_response" value="rejected"/> Reject </label>
                    <input className = "border" type = "text" name = "info"></input>
                    <button type = "submit" className="border mb-3 px-2 py-1 cursor-pointer"> Submit </button>
                    </form>
                </div>
                </>
                : item.status == 'Claimed' ? <p>Claimed</p>: <p>No claims yet</p>}
            </div>
            )})
        : "No claims made"}
        </div>
    )
}