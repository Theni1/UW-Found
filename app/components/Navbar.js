import Link from "next/link"
import {createClient} from "@/utils/supabase/server";
import { logoutStudent } from "./logout";

export default async function Navbar () {
  const supabase = await createClient();
  const {data: {user}} = await supabase.auth.getUser();

  return (
     <nav className="w-full border-b-4 h-20 bg-black border-yellow-400 shadow-lg antialiased">
        <div className = "flex flex-row items-center h-full justify-between">
            <div className="flex flex-col items-center">
              <Link href = "/" className="font-bold text-lg tracking-wide text-yellow-400 pl-5">UW Lost and Found</Link>
              {user ? 
                <p className="pl-4 text-xs text-gray-400">
                  {user.email}
                </p>
              : ""}
            </div>
            <div className="flex flex-row gap-6 pr-3 text-yellow-400 text-sm font-semibold">
                {user ?
                <>
                <Link className = "font-medium cursor-pointer hover:text-yellow-300 transition-colors" href = "/student">Student Dashboard</Link>
                <Link className = "font-medium cursor-pointer hover:text-yellow-300 transition-colors" href = "/posts">My Posts</Link>
                <Link className = "font-medium cursor-pointer hover:text-yellow-300 transition-colors" href = "/claims">My Claims</Link>
                <form action = {logoutStudent}>
                  <button className = "font-medium cursor-pointer hover:text-yellow-300 transition-colors">Logout</button>
                </form>
                </>
                 : 
                <>
                <Link className = "font-medium cursor-pointer hover:text-yellow-300 transition-colors" href ="/student/signup">Sign Up</Link>
                <Link className = "font-medium cursor-pointer hover:text-yellow-300 transition-colors" href ="/student/login">Login</Link>
                </>
                }
            </div>
        </div>
    </nav>
  );
}