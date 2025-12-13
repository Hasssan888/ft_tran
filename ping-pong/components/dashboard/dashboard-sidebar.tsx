"use client"

import { Home, Gamepad2, Trophy, TrendingUp, MessageCircle, User, Settings, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface DashboardSidebarProps {
open: boolean
onClose: () => void
}

const navItems = [
{ icon: Home, label: "Dashboard", href: "/dashboard", id: "dashboard" },
{ icon: Gamepad2, label: "Play Match", href: "/game", id: "play" },
{ icon: Trophy, label: "Tournaments", href: "/tournaments", id: "tournaments" },
{ icon: TrendingUp, label: "Leaderboard", href: "/leaderboard", id: "leaderboard" },
{ icon: MessageCircle, label: "Chat", href: "/chat", id: "chat" },
{ icon: User, label: "Profile", href: "/profile", id: "profile" },
{ icon: Settings, label: "Settings", href: "/settings", id: "settings" },
]

export default function DashboardSidebar({ open, onClose }: DashboardSidebarProps) {
const [activeItem, setActiveItem] = useState("dashboard")
const [isExpanded, setIsExpanded] = useState(false)

return (
    <>
    {/* Mobile overlay */}
    {open && (
        <div 
        className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
        onClick={onClose}
        />
    )}

    {/* Desktop sidebar */}
    <aside
        className="hidden md:flex h-screen sticky top-0"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
    >
        <div
        className={`h-full bg-card border-r border-border/50 flex flex-col transition-all duration-300 ease-in-out ${
            isExpanded ? "w-64" : "w-20"
        }`}
        >
        {/* Header */}
        <div className="p-6 border-b border-border/50 flex items-center gap-3 min-h-[80px]">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/25">
            <span className="text-xl">🏓</span>
            </div>
            <h1
            className={`text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent whitespace-nowrap transition-opacity duration-300 ${
                isExpanded ? "opacity-100" : "opacity-0 w-0"
            }`}
            >
            PingPong Arena
            </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            return (
                <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveItem(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden ${
                    isActive
                    ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary shadow-lg shadow-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                >
                {/* Active indicator */}
                {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full" />
                )}
                
                <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                }`} />
                
                <span
                    className={`font-medium whitespace-nowrap transition-opacity duration-300 ${
                    isExpanded ? "opacity-100" : "opacity-0 w-0"
                    }`}
                >
                    {item.label}
                </span>

                {/* Hover effect */}
                {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg" />
                )}
                </Link>
            )
            })}
        </nav>

        {/* Footer hint */}
        <div
            className={`p-4 border-t border-border/50 transition-opacity duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0"
            }`}
        >
            <div className="p-3 bg-muted/30 rounded-lg border border-border/50">
            <p className="text-xs text-muted-foreground text-center">
                Hover to expand
            </p>
            </div>
        </div>
        </div>
    </aside>

    {/* Mobile sidebar */}
    {open && (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border/50 z-50 md:hidden flex flex-col animate-in slide-in-from-left duration-300">
        {/* Header */}
        <div className="p-6 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
                <span className="text-xl">🏓</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                PingPong Arena
            </h1>
            </div>
            <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
            <X className="w-5 h-5" />
            </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            return (
                <Link
                key={item.id}
                href={item.href}
                onClick={() => {
                    setActiveItem(item.id)
                    onClose()
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden ${
                    isActive
                    ? "bg-gradient-to-r from-primary/20 to-secondary/20 text-primary shadow-lg shadow-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                >
                {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-r-full" />
                )}
                
                <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                }`} />
                
                <span className="font-medium">{item.label}</span>

                {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg" />
                )}
                </Link>
            )
            })}
        </nav>
        </aside>
    )}
    </>
)
}