"use client"

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <h1 className="font-bold">MyAuthApp</h1>
            <div className="space-x-4">
                <Link href="/">Login</Link>
                <Link href="/signup">Sign Up</Link>
                <Link href="/profile">Profile</Link>
            </div>
        </nav>
    )
}