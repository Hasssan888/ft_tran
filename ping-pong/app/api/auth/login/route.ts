import { NextResponse } from "next/server"
import { users } from "@/lib/mock-db"

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = users.find(
    (u) => u.email === email && u.password === password
  )

  if (!user) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    )
  }

  return NextResponse.json({
    message: "Login successful",
    user: {
      id: user.id,
      email: user.email,
      username: user.username
    }
  })
}
