"use client"

import { Menu, Search, Bell, MessageSquare, LogOut, User as UserIcon, Settings as SettingsIcon, BarChart3 } from "lucide-react"
import { useState } from "react"

interface DashboardNavbarProps {
onToggleSidebar: () => void
sidebarExpanded: boolean
}

// Simple Dropdown Menu Components
function DropdownMenu({ children }: { children: React.ReactNode }) {
return <div className="relative">{children}</div>
}

function DropdownMenuTrigger({ 
children, 
onClick 
}: { 
children: React.ReactNode
onClick: () => void 
}) {
return <div onClick={onClick}>{children}</div>
}

function DropdownMenuContent({ 
children, 
isOpen 
}: { 
children: React.ReactNode
isOpen: boolean 
}) {
if (!isOpen) return null

return (
    <div className="absolute right-0 mt-2 w-56 bg-card border border-border/50 shadow-xl rounded-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
    {children}
    </div>
)
}

function DropdownMenuItem({ 
children, 
onClick,
className = ""
}: { 
children: React.ReactNode
onClick?: () => void
className?: string
}) {
return (
    <button
    onClick={onClick}
    className={`w-full text-left px-3 py-2 text-sm flex items-center cursor-pointer hover:bg-muted/50 focus:bg-muted/50 transition-colors ${className}`}
    >
    {children}
    </button>
)
}

export default function DashboardNavbar({ onToggleSidebar, sidebarExpanded }: DashboardNavbarProps) {
const [searchFocused, setSearchFocused] = useState(false)
const [dropdownOpen, setDropdownOpen] = useState(false)

return (
    <header 
    className="fixed top-0 right-0 bg-card/80 backdrop-blur-xl border-b border-border/50 h-16 flex items-center justify-between px-4 md:px-8 z-40 transition-all duration-300 ease-in-out"
    style={{
        left: sidebarExpanded ? '256px' : '80px',
        width: sidebarExpanded ? 'calc(100% - 256px)' : 'calc(100% - 80px)'
    }}
    >
    {/* Left side - Menu toggle (mobile only) */}
    <button 
        onClick={onToggleSidebar} 
        className="md:hidden p-2 hover:bg-muted/50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
    >
        <Menu className="w-5 h-5 text-foreground" />
    </button>

    {/* Center - Search bar */}
    <div className="hidden md:flex flex-1 max-w-md">
        <div 
        className={`flex items-center w-full bg-muted/30 rounded-lg px-4 py-2 border transition-all duration-200 ${
            searchFocused 
            ? "border-primary/50 shadow-lg shadow-primary/10 bg-muted/50" 
            : "border-border/50 hover:border-border"
        }`}
        >
        <Search className={`w-4 h-4 mr-2 transition-colors duration-200 ${
            searchFocused ? "text-primary" : "text-muted-foreground"
        }`} />
        <input
            type="text"
            placeholder="Search players, tournaments..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
        />
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border/50 bg-muted/30 px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            ⌘K
        </kbd>
        </div>
    </div>

    {/* Right side - Icons and avatar */}
    <div className="flex items-center gap-2 md:gap-4">
        {/* Search button for mobile */}
        <button className="md:hidden p-2 hover:bg-muted/50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95">
        <Search className="w-5 h-5 text-foreground" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-muted/50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 group">
        <Bell className="w-5 h-5 text-foreground" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse">
            <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
        </span>
        </button>

        {/* Messages */}
        <button className="p-2 hover:bg-muted/50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95">
        <MessageSquare className="w-5 h-5 text-foreground" />
        </button>

        {/* User menu */}
        <DropdownMenu>
        <DropdownMenuTrigger onClick={() => setDropdownOpen(!dropdownOpen)}>
            <button className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 hover:scale-105 active:scale-95">
            JD
            </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent isOpen={dropdownOpen}>
            <div className="px-3 py-2 border-b border-border/50">
            <p className="text-sm font-medium text-foreground">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
            <DropdownMenuItem onClick={() => setDropdownOpen(false)}>
            <UserIcon className="w-4 h-4 mr-2" />
            Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDropdownOpen(false)}>
            <BarChart3 className="w-4 h-4 mr-2" />
            Statistics
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDropdownOpen(false)}>
            <SettingsIcon className="w-4 h-4 mr-2" />
            Settings
            </DropdownMenuItem>
            <div className="border-t border-border/50 my-1" />
            <DropdownMenuItem 
            onClick={() => setDropdownOpen(false)}
            className="text-destructive hover:bg-destructive/10 focus:bg-destructive/10"
            >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    </div>

    {/* Backdrop to close dropdown */}
    {dropdownOpen && (
        <div 
        className="fixed inset-0 z-30" 
        onClick={() => setDropdownOpen(false)}
        />
    )}
    </header>
)
}