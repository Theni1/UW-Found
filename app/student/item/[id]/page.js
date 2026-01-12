import {createClient} from '@/utils/supabase/server';
import Link from 'next/link';
import {redirect} from "next/navigation";

export default async function StudentItemPage({params}) {
    const {id} = await params
    const supabase = await createClient();
    const result = await supabase.auth.getUser();
    const user = result.data.user;
    const { data:items, error } = await supabase
    .from('lost_items')
    .select()
    .eq('id', id)
    .single();
    if (!user) 
    redirect("/student/login");

    console.log(items)

    return (
        <div>
            <div className = "border rounded-lg px-3 py-2 mt-10">
              <Link href = "/student"> Back to Dashboard </Link>
              <p>Title: {items?.title}</p>
              <p>Location: {items?.location}</p>
              <p>Description: {items?.description}</p>
              <button>Claim item</button>
            </div>
        </div>
    )
}