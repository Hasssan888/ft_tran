import { NextResponse } from "next/server";

export async function Post(req: Request) {
    const { email, password } = await req.json();

    if (email === "test@gmail.com" && password === "123456") {
        return NextResponse.json({
            token: "fake-jwt-token",
            user: { email }
        });
    }

    return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
    );
}