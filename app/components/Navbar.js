import Link from "next/link"
import {createClient} from "@/utils/supabase/server";
import { logoutStudent } from "./logout";

export default async function Navbar () {
  const supabase = await createClient();
  const {data: {user}} = await supabase.auth.getUser();

  return (
    <nav className = "w-full border-b h-20">
        <div className = "flex flex-row items-center h-full justify-between">
            <h1 className = "font-bold text-lg pl-3"> UW Lost and Found </h1>
            <div className = "flex flex-row gap-6 pr-3">
                <Link href ="/">Home</Link>
                {user ?
                <form action = {logoutStudent}>
                  <button className = "cursor-pointer">Logout</button>
                </form>
                 : 
                <>
                <Link href ="/student/signup">Sign Up</Link>
                <Link href ="/student/login">Login</Link>
                </>
                }
            </div>
        </div>
    </nav>
  );
}