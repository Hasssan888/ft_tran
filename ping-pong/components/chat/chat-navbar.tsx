"use client"

import { Menu, Settings, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChatNavbarProps {
    onToggleSidebar: () => void
}

export default function ChatNavbar({ onToggleSidebar }: ChatNavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="h-full px-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={onToggleSidebar}>
                <Menu className="w-5 h-5" />
            </Button>
            <div className="hidden md:flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">PA</span>
                </div>
                <span className="font-bold text-foreground">Chat</span>
            </div>
            </div>

            <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
            </Button>
            </div>
        </div>
        </nav>
    )
}
