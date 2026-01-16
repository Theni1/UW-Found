import {createClient} from '@/utils/supabase/server';
import Link from 'next/link';
import {redirect} from "next/navigation";
import Status from "@/app/components/Status"

export default async function StudentItemPage({params}) {
    const {id} = await params
    const supabase = await createClient();
    const result = await supabase.auth.getUser();
    const user = result.data.user;
    const { data:items } = await supabase
    .from('lost_items')
    .select()
    .eq('id', id)
    .single();
    
    if (!user) 
    redirect("/student/login");
    
    return (
        <div className = "flex flex-col items-center justify-center">
            <h1 className = "text-3xl font-bold mb-8 text-center mt-5">Request a claim</h1>
            <div className = "w-full max-w-xl mx-auto border rounded-lg px-6 py-4 items-center relative">
              <Link className = "cursor-pointer absolute top-4 right-4 text-sm font-medium text-gray-600 hover:text-black" href = "/student"> Back to Dashboard </Link>
              <p className="text-xl font-semibold">Title: {items?.title}</p>
              <p className="text-xl font-semibold">Location: {items?.location}</p>
              <p className="text-xl font-semibold">Description: {items?.description}</p>
              <Status id = {id}/>
            </div>
        </div>
    )
}
