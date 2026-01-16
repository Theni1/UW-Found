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
        <h1 className="text-3xl font-bold mb-8 text-center mt-5">My Claims</h1>
        {items ? items.map ( (item) => {
            return(
            <div className = "max-w-4xl mx-auto px-6 py-10 border rounded-lg mb-10" key = {item.id}>
                <p className="text-2xl font-bold mb-4">Title: {item?.lost_items.title}</p>
                <p className="text-2xl font-bold mb-4">Location: {item?.lost_items.location}</p>
                <p className="text-2xl font-bold mb-4">Description: {item?.lost_items.description}</p>
                <p className="text-2xl font-bold mb-4">Your Claim: {item?.claimer_info}</p>
                {item?.status == "Accepted" ? <p className ="pt-3 text-2xl font-bold text-green-600"> Accepted</p>  : (item?.status == "Pending" ? <div className = "pt-3 text-2xl font-bold text-yellow-600">Pending</div> :<p className = "pt-3 text-2xl font-bold text-red-600">Rejected</p> )}
                {item?.status_response ? <p className = "pt-3 text-2xl font-bold mb-8">{item?.status_response}</p>: ""}
            </div>
            )})
        : <p>No claims made</p>}
        </div>
    )
}