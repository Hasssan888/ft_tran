"use client"

import Link from "next/link"
import { Menu, Bell, User } from "lucide-react"
import { useState } from "react"

const mockPlayers = [
    { id: 1, name: "AlexPro", avatar: "/player-avatar-1.png", rank: 1 },
    { id: 2, name: "ShadowKing", avatar: "/player-avatar-2.png", rank: 2 },
    { id: 3, name: "NeonViper", avatar: "/player-avatar-3.png", rank: 3 },
]

export default function LeaderboardNavbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [userMenuOpen, setUserMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PP</span>
            </div>
            <span className="font-bold text-lg gradient-text hidden sm:inline">PingPong Arena</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="text-foreground/70 hover:text-foreground transition">
                Dashboard
            </Link>
            <Link href="/game" className="text-foreground/70 hover:text-foreground transition">
                Game
            </Link>
            <Link href="/profile" className="text-foreground/70 hover:text-foreground transition">
                Profile
            </Link>
            <Link href="/leaderboard" className="text-primary font-semibold">
                Leaderboard
            </Link>
            <Link href="/settings" className="text-foreground/70 hover:text-foreground transition">
                Settings
            </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-card rounded-lg transition">
                <Bell size={20} className="text-foreground/70" />
            </button>

            <div className="relative">
                <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition"
                >
                <User size={20} className="text-white" />
                </button>
                {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg">
                    <Link href="/profile" className="block px-4 py-2 hover:bg-muted rounded-t-lg">
                    Profile
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 hover:bg-muted">
                    Settings
                    </Link>
                    <button className="w-full text-left px-4 py-2 hover:bg-muted rounded-b-lg text-destructive">
                    Logout
                    </button>
                </div>
                )}
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
                <Menu size={20} />
            </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
            <div className="md:hidden border-t border-border bg-card">
            <div className="px-4 py-3 flex flex-col gap-3">
                <Link href="/dashboard" className="text-foreground/70 hover:text-foreground">
                Dashboard
                </Link>
                <Link href="/game" className="text-foreground/70 hover:text-foreground">
                Game
                </Link>
                <Link href="/profile" className="text-foreground/70 hover:text-foreground">
                Profile
                </Link>
                <Link href="/leaderboard" className="text-primary font-semibold">
                Leaderboard
                </Link>
                <Link href="/settings" className="text-foreground/70 hover:text-foreground">
                Settings
                </Link>
            </div>
            </div>
        )}
        </nav>
    )
}
