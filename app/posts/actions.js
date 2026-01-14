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

  const { error } = await supabase
    .from("lost_items")
    .update({
      status_decision: decision === "accepted" ? "Accepted" : "Rejected",
      status: decision === "accepted" ? "Claimed" : "Unclaimed",
      status_response: info,
    })
    .eq("id", itemId);

  if (error) {
    throw new Error(error.message);
  }

  redirect("/student");
}
