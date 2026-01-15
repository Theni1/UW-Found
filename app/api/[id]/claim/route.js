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
  const { error: claimError } = await supabase
  .from("claims")
  .insert({
    item_id: id,
    claimer_id: user.id,
    claimer_email: user.email,
    claimer_info: info,
    status: "Pending",
  });

  if (claimError) {
    return NextResponse.json({ success: false, data: claimError.message });
  }

  const { error: itemError } = await supabase
  .from("lost_items")
  .update({ status: "Pending" })
  .eq("id", id)
  .eq("status", "Unclaimed");

  if (itemError) {
    return NextResponse.json({ success: false, data: itemError.message });
  }

  return NextResponse.json({ success: true , data: "Item claim sent successfully"});
}
