import {createClient} from "@/utils/supabase/server";
import {NextResponse} from "next/server"

export async function POST(req, {params}) {
  const {info} = await req.json();
  const {id} = await params;
  const supabase = await createClient();

  const {data: {user}} = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({success: false, data: "Not authenticated"});
  }
  const { data, error } = await supabase
    .from("lost_items")
    .update({
      status: "pending",
      status_info: info,
      status_email: user.email,      
    })
    .eq("id", id)
    .eq("status", "Unclaimed")
    .select()
    .single()

  if (error) {
    return NextResponse.json({ success: false , data: error.message});
  }

  if (data.length === 0) {
    return NextResponse.json({ success: false , data: "Item already claimed"});
  }
  return NextResponse.json({ success: true , data: "Item claimed"});
}
