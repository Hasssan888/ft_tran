"use client"

import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function GameNavbar() {
    return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-card/95 backdrop-blur border-b border-border z-40 flex items-center justify-between px-4 md:px-6">
    {/* Left - Logo */}
    <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
        <span className="text-foreground font-bold text-sm">⚾</span>
        </div>
        <span className="font-bold text-lg gradient-text hidden sm:inline">PingPong Arena</span>
    </div>

    {/* Center - Match Info */}
    <div className="flex-1 flex flex-col items-center mx-4">
        <p className="text-sm font-semibold text-foreground">vs. Opponent</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
        <Clock size={14} />
        <span>15:32</span>
        </div>
    </div>

    {/* Right - Controls */}
    <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
        <span className="text-sm font-semibold text-primary">15</span>
        <span className="text-xs text-muted-foreground">-</span>
        <span className="text-sm font-semibold text-accent">12</span>
        </div>

        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-lg">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold">
                Y
            </div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    </div>
    </nav>
    )
}
