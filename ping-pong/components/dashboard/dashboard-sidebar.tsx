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
const [isHovered, setIsHovered] = useState(false)

return (
    <>
    {/* Mobile overlay */}
    {open && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={onClose} />}

    {/* Desktop sidebar with hover trigger area */}
    <div
        className="hidden md:flex h-screen relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {/* Sidebar */}
        <div
        className={`h-screen bg-card border-r border-border/50 backdrop-blur-sm flex flex-col transition-all duration-400 ease-out ${
            isHovered ? "w-64" : "w-20"
        } ${isHovered ? "shadow-lg shadow-primary/10" : ""}`}
        >
        {/* Header */}
        <div className="p-6 border-b border-border/50 flex items-center justify-between overflow-hidden">
            <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-foreground font-bold text-lg flex-shrink-0">
                🏓
            </div>
            <h1
                className={`text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent whitespace-nowrap transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
                }`}
            >
                Arena
            </h1>
            </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
            {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            return (
                <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveItem(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                    ? "bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/50 shadow-lg shadow-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                style={{
                    animationDelay: isHovered ? `${index * 30}ms` : "0ms",
                }}
                >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span
                    className={`font-medium whitespace-nowrap transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {item.label}
                </span>
                </Link>
            )
            })}
        </nav>

        {/* Collapse hint */}
        <div
            className={`p-4 border-t border-border/50 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
            <div className="p-3 bg-muted/30 rounded-lg border border-border/50">
            <p className="text-xs text-muted-foreground text-center">Hover to expand</p>
            </div>
        </div>
        </div>
    </div>

    {/* Mobile sidebar */}
    {open && (
        <div className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border/50 backdrop-blur-sm z-40 md:hidden flex flex-col sidebar-slide-in">
        {/* Header */}
        <div className="p-6 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-foreground font-bold text-lg">
                🏓
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Arena
            </h1>
            </div>
            <button onClick={onClose} className="md:hidden p-2 hover:bg-muted rounded-lg transition-all duration-200">
            <X className="w-5 h-5" />
            </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1">
            {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            return (
                <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveItem(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 nav-item-stagger ${
                    isActive
                    ? "bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/50 shadow-lg shadow-primary/20 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
                style={{
                    animationDelay: `${index * 50}ms`,
                }}
                >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                </Link>
            )
            })}
        </nav>
        </div>
    )}
    </>
)
}
