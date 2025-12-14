"use client"

import Link from "next/link"
import { ChevronDown, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SettingsNavbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 md:px-8 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">PA</span>
            </div>
            <span className="font-bold text-lg gradient-text">PingPong Arena</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Dashboard
            </Link>
            <Link href="/game" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Game
            </Link>
            <Link href="/profile" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Profile
            </Link>
            <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Leaderboard
            </Link>
            <Link href="/tournaments" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Tournaments
            </Link>
            <Link href="/chat" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Chat
            </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
            </Button>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent" />
                    <ChevronDown className="w-4 h-4" />
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </div>
        </nav>
    )
}
