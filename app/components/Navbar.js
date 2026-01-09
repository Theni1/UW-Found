import Link from "next/link"

export default function Navbar () {
  return (
    <nav className = "w-full border-b h-20">
        <div className = "flex flex-row items-center h-full justify-between">
            <Link href = "/" className = "font-bold text-lg pl-3">
             UW Lost and Found
            </Link> 
            <div className = "flex flex-row gap-6 pr-3">
                <Link href ="/">Home</Link>
                <Link href ="/student">Student Login</Link>
                <Link href ="/staff">Staff Login</Link>
            </div>
        </div>
    </nav>
  );
}