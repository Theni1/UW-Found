import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function StudentPage() {
  const supabase = await createClient();
  const result = await supabase.auth.getUser();
  const user = result.data.user;
  console.log (user);

  if (!user) 
    redirect("/student/login");

  return (
    <div className = "flex flex-col items-center max-w min-h-screen">
      <h1>Student Dashboard</h1>

    </div>
  );
}
