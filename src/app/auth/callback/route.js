import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const next = searchParams.get("next") || "/home";

    if (code) {
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
            console.error("Auth error:", error);
            return NextResponse.redirect(new URL("/login?error=Failed to sign in", request.url));
        }
    }

    return NextResponse.redirect(new URL(next, request.url));
}
