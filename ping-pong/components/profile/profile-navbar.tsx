"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, LogOut, Settings, User } from "lucide-react"

export default function ProfileNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">PA</span>
                </div>
                <span className="text-lg font-bold text-foreground hidden md:inline-block">PingPong Arena</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
                <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
                </Link>
                <Link href="/game" className="text-muted-foreground hover:text-foreground transition-colors">
                Game
                </Link>
                <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Leaderboard
                </Link>
                <Link href="/settings" className="text-muted-foreground hover:text-foreground transition-colors">
                Settings
                </Link>
            </div>

            {/* User Avatar Dropdown - Desktop */}
            <div className="hidden md:flex items-center gap-4">
                <div className="relative group">
                <button className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition-all">
                    <span className="text-white font-bold text-sm">JD</span>
                </button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <Link
                    href="/profile"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted transition-colors border-b border-border"
                    >
                    <User size={16} />
                    <span>Profile</span>
                    </Link>
                    <Link
                    href="/settings"
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted transition-colors border-b border-border"
                    >
                    <Settings size={16} />
                    <span>Settings</span>
                    </Link>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted transition-colors text-left">
                    <LogOut size={16} />
                    <span>Logout</span>
                    </button>
                </div>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
                {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
            </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
            <div className="md:hidden pb-4 border-t border-border">
                <Link
                href="/dashboard"
                className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                Dashboard
                </Link>
                <Link
                href="/game"
                className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                Game
                </Link>
                <Link
                href="/leaderboard"
                className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                Leaderboard
                </Link>
                <Link
                href="/settings"
                className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                Settings
                </Link>
            </div>
            )}
        </div>
        </nav>
    )
}
