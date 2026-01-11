import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";


export default async function StudentPage() {
  const supabase = await createClient();
  const result = await supabase.auth.getUser();
  const user = result.data.user;
  const { data:items, error } = await supabase
  .from('lost_items')
  .select()
  if (!user) 
    redirect("/student/login");

  return (
    <div className = "flex flex-col items-center max-w min-h-screen">
      <h1 className = "mt-2 text-3xl font-bold">Student Dashboard</h1>
      <div className = "mt-15">
      <Link href="/student/upload" className="border py-1 px-2"> Upload </Link>
      </div>
      <div className = "mt-15 px-6 flex flex-row">
          {items ? items.map((item) => {
            return (
              <div className = "border rounded-lg px-3 py-2 ml-6" key={item.id}>
              <p>Title: {item.title}</p>
              <p>Location: {item.location}</p>
              <p>Description: {item.description}</p>
              </div>
          )}): ""}
      </div>

    </div>
  );
}
