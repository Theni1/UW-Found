import Link from "next/link"
import {createClient} from "@/utils/supabase/server";
import { logoutStudent } from "./logout";

export default async function Navbar () {
  const supabase = await createClient();
  const {data: {user}} = await supabase.auth.getUser();

  return (
    <nav className = "w-full border-b h-20">
        <div className = "flex flex-row items-center h-full justify-between">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-lg">UW Lost and Found</h1>
              {user ? 
                <p className="pl-4 text-sm text-gray-600">
                  {user.email}
                </p>
              : ""}
            </div>
            <div className = "flex flex-row gap-6 pr-3">
                <Link className = "cursor-pointer" href ="/">Home</Link>
                {user ?
                <>
                <Link href = "/student">Student Dashboard</Link>
                <Link href = "/posts">My Posts</Link>
                <Link href = "/claims">My Claims</Link>
                <form action = {logoutStudent}>
                  <button className = "cursor-pointer">Logout</button>
                </form>
                </>
                 : 
                <>
                <Link className = "cursor-pointer" href ="/student/signup">Sign Up</Link>
                <Link className = "cursor-pointer" href ="/student/login">Login</Link>
                </>
                }
            </div>
        </div>
    </nav>
  );
}