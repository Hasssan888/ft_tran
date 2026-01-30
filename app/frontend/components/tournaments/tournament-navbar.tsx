"use client"

import Link from "next/link"
import { Bell, Settings, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TournamentNavbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border/50 backdrop-blur-sm">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-foreground font-bold text-sm">
                PA
            </div>
            <span className="hidden sm:inline font-bold text-lg gradient-text">PingPong Arena</span>
            </Link>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
            </Link>
            <Link href="/tournaments" className="text-sm text-foreground font-semibold">
                Tournaments
            </Link>
            <Link href="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Leaderboard
            </Link>
            <Link href="/game" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Play
            </Link>
            </div>

            {/* Right: Actions & User Menu */}
            <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className="gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent"></div>
                <ChevronDown className="w-4 h-4" />
            </Button>
            </div>
        </div>
        </nav>
    )
}
