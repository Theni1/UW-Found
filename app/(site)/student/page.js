import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";


export default async function StudentPage() {
  const supabase = await createClient();
  const result = await supabase.auth.getUser();
  const user = result.data.user;
  const { data:items} = await supabase
  .from('lost_items')
  .select()
  if (!user) 
    redirect("/student/login");

  return (
    <div className = "flex flex-col items-center max-w min-h-screen">
      <h1 className = "mt-5 text-3xl font-bold">Student Dashboard</h1>
      <div className = "mt-10">
      <Link href="/student/upload" className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-xl shadow-lg hover:transform transition-transform duration-200 hover:scale-105"> Upload </Link>
      </div>
      <div className = "mt-12 px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items ? items.map((item) => 
               item.status == "Unclaimed" || item.status == "Pending" ? (item.poster_id != user.id ?
              <Link  key = {item.id} href = {`/student/item/${item.id}`}>
              <div className = "border rounded-lg px-4 py-4 text-black hover:shadow-md transition-shadow">
              <p className = "block text-xs font-bold tracking-widest mb-2">{item.status}</p>
              <p className = "text-xl font-semibold mb-1">Title: {item.title}</p>
              <p className = "text-xl font-semibold mb-1">Location: {item.location}</p>
              <p className="text-xl font-semibold mb-1" >Description: {item.description}</p>
              </div>
              </Link>
              : 
              <div className = "border rounded-lg px-4 py-4 text-black hover:shadow-md transition-shadow">
              <p className = "block text-xs font-bold tracking-widest mb-2">{item.status}</p>
              <p className = "text-xl font-semibold mb-1">Title: {item.title}</p>
              <p className = "text-xl font-semibold mb-1">Location: {item.location}</p>
              <p className="text-xl font-semibold mb-1" >Description: {item.description}</p>
              </div>)
              : ""
          ): ""}
      </div>

    </div>
  );
}
