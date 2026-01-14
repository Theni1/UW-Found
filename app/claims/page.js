import {createClient} from "@/utils/supabase/server"

export default async function Claims() {
    const supabase =  await createClient()
    const result = await supabase.auth.getUser();
    const user = result.data.user;
    const { data: items, error } = await supabase
    .from("lost_items")
    .select()
    .eq("status_email", user.email);
    if (!user) 
        redirect("/student/login");
    return (
        <div>
        {items ? items.map ( (item) => {
            return(
            <div key = {item.id}>
                <p>Title: {item?.title}</p>
                <p>Location: {item?.location}</p>
                <p>Description: {item?.description}</p>
                <p>Claim info: {item?.status_info}</p>
                <p>Status: {item?.status_decision}</p>
            </div>
            )})
        : "No claims made"}
        </div>
    )
}