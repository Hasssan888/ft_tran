import { NextResponse } from "next/server"
import { users } from "@/lib/mock-db"

export async function POST(req: Request) {
  const { email, password, username } = await req.json()

  if (!email || !password || !username) {
    return NextResponse.json(
      { message: "Missing fields" },
      { status: 400 }
    )
  }

  // check if user exists
  const exists = users.find((u) => u.email === email)
  if (exists) {
    return NextResponse.json(
      { message: "User already exists" },
      { status: 409 }
    )
  }

  const newUser = {
    id: users.length + 1,
    email,
    password,
    username
  }

  users.push(newUser)

  console.log("🆕 Users DB:", users)

  return NextResponse.json({
    message: "Account created successfully",
    user: {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username
    }
  })
}
