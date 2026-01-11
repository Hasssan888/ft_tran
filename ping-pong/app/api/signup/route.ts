import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const { name, email, password } = body;

    return NextResponse.json({
        message: "Signup Ok",
        data: {
            name: name,
            email: email,
        },
    });
}