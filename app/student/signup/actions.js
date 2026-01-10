"use server"

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function signUpStudent (formData) {
    const supabase = await createClient();
    const email = String(formData.get("email"))
    const password = String(formData.get("password"))
    const {} = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: "http://localhost:3000/auth/callback?next=/student/login",
        },
    });
}