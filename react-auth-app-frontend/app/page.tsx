import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-4">
      <h1>Auth App</h1>
      <Link href="/signup">Signup</Link>
      <br />
      <Link href="/login">Login</Link>
      <Link href="/profile">Profile</Link>
    </div>
  )
}