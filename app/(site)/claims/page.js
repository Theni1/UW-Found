import {createClient} from "@/utils/supabase/server"

export default async function Claims() {
    const supabase =  await createClient()
    const result = await supabase.auth.getUser();
    const user = result.data.user;
    const { data: items, } = await supabase
    .from("claims")
    .select(`
      id,
      status,
      status_response,
      claimer_info,
      lost_items (
        id,
        title,
        location,
        description
      )
    `)
    .eq("claimer_email", user.email);

    if (!user) 
        redirect("/student/login");
    return (
        <div>
        {items ? items.map ( (item) => {
            return(
            <div key = {item.id}>
                <p>Title: {item?.lost_items.title}</p>
                <p>Location: {item?.lost_items.location}</p>
                <p>Description: {item?.lost_items.description}</p>
                <p>Your Claim: {item?.claimer_info}</p>
                <p className ="pt-3">Status: {item?.status}</p>
                {item?.status_response ? <p>Comments: {item?.status_response}</p>: ""}
            </div>
            )})
        : <p>No claims made</p>}
        </div>
    )
}