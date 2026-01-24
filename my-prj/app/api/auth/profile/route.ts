import  { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        name: "Hassan",
        email: "test@gmail.com"
    });
}