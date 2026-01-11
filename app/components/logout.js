"use server"

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function logoutStudent() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/student/login");
}