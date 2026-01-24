import { NextResponse } from "next/server";

export async function Post(req: Request) {
    const { name, email, password } = await req.json();

    if (!email || !password) 
        return NextResponse.json({ message: "Missing fields" }, { status: 400 });

    return NextResponse.json({
        message: "User created",
        user: { name, email }
    });
}   