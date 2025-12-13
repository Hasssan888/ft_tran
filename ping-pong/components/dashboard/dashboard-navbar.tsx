"use client"

import { Menu, Search, Bell, MessageSquare, LogOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface DashboardNavbarProps {
    onToggleSidebar: () => void
}

export default function DashboardNavbar({ onToggleSidebar }: DashboardNavbarProps) {
    return (
        <div className="fixed top-0 right-0 left-16 md:left-64 bg-card border-b border-border/50 h-16 flex items-center justify-between px-4 md:px-8 z-40 backdrop-blur-sm">
        {/* Left side - Menu toggle */}
        <button onClick={onToggleSidebar} className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
            <Menu className="w-5 h-5 text-foreground" />
        </button>

        {/* Center - Search bar (hidden on mobile) */}
        <div className="hidden md:flex flex-1 max-w-xs items-center bg-muted/50 rounded-lg px-4 py-2 border border-border/50">
            <Search className="w-4 h-4 text-muted-foreground mr-2" />
            <input
            type="text"
            placeholder="Search players, tournaments..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
            />
        </div>

        {/* Right side - Icons and avatar */}
        <div className="flex items-center gap-4 md:gap-6">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>

            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <MessageSquare className="w-5 h-5 text-foreground" />
            </button>

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
                JD
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Statistics</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive cursor-pointer">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
        </div>
    )
}
