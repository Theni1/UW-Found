"use server"
import { createClient } from "@/utils/supabase/server";

export async function signUpStudent (prevState, formData) {
    const supabase = await createClient();
    const email = String(formData.get("email"))
    const password = String(formData.get("password"))
    const {error} = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: "https://uw-found.vercel.app/auth/callback?next=/student/login",
        },
    });
    
    if (error) {
        console.log("Supabase signUp error:", error);
        return { success: false, error: error.message };
    }
    return { success: true, error: null };

}