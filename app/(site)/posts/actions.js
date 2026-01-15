"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function handleSubmit(formData) {
  const supabase = await createClient();

  const decision = formData.get("claim_response");
  const info = formData.get("info");
  const itemId = formData.get("item_id");

  const {data: {user}} = await supabase.auth.getUser();

  if (!user) {
    redirect('/student/signup')
  }

  const { error: claimError } = await supabase
    .from("claims")
    .update({
      status: decision === "accepted" ? "Accepted" : "Rejected",
      status_response: info,
    })
    .eq("item_id", itemId)
    .eq("status", "Pending");

  if (claimError) {
    throw new Error(claimError.message);
  }

  const { error: itemError } = await supabase
    .from("lost_items")
    .update({
      status: decision === "accepted" ? "Claimed" : "Unclaimed",
    })
    .eq("id", itemId);

  if (itemError) {
    throw new Error(itemError.message);
  }

  redirect("/student");
}
