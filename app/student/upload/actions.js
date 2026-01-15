"use server"

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function uploadStudentItem(formData) {
    const supabase = await createClient();
    const result = await supabase.auth.getUser();
    const user = result.data.user;
    if (!user) 
        redirect("/student/login");
    
    const item = formData.get("item");
    const location = formData.get("location");
    const description = formData.get("description");

    if (!item || !location || !description) {
        throw new Error("All fields are required");
    }
    const {error} = await supabase.from("lost_items").insert({
        title: item,
        location: location,
        description: description,
        poster_id: user.id,
    });
    if (error) {
        throw new Error("Failed to upload item");
    }
    redirect("/student");

}