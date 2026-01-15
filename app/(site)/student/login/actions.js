"use server"

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function loginStudent (formData) {
    const supabase = await createClient();
    const email = String(formData.get("email"))
    const password = String(formData.get("password"))
    const {error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    if (error) {
        redirect("/student/login?error=Invalid%20email%20or%20password");
    }
    redirect("/student");
    
}