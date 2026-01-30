"use client"

import { Clock, Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

export default function GameNavbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false)
            }
        }

        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [dropdownOpen])

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-card/95 backdrop-blur border-b border-border z-40 flex items-center justify-between px-4 md:px-6">
            {/* Left - Back to Home Button */}
            <div className="flex items-center gap-3">
                <Link href="/dashboard">
                    <Button variant="outline" size="sm" className="gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="hidden sm:inline">Back</span>
                    </Button>
                </Link>
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-foreground font-bold text-sm">🏓</span>
                    </div>
                    <span className="font-bold text-lg gradient-text hidden sm:inline">PingPong Arena</span>
                </Link>
            </div>

            {/* Center - Match Info */}
            <div className="flex-1 flex flex-col items-center mx-4">
                <p className="text-sm font-semibold text-foreground">vs. Opponent</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <Clock size={14} />
                    <span>15:32</span>
                </div>
            </div>

            {/* Right - Score and Profile */}
            <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                    <span className="text-sm font-semibold text-primary">15</span>
                    <span className="text-xs text-muted-foreground">-</span>
                    <span className="text-sm font-semibold text-accent">12</span>
                </div>

                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 hover:scale-105 active:scale-95"
                    >
                        JD
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-card border border-border/50 shadow-xl rounded-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            <div className="px-3 py-2 border-b border-border/50">
                                <p className="text-sm font-medium text-foreground">John Doe</p>
                                <p className="text-xs text-muted-foreground">john@example.com</p>
                            </div>
                            <div className="py-1">
                                <Link
                                    href="/profile"
                                    className="w-full text-left px-3 py-2 text-sm flex items-center cursor-pointer hover:bg-muted/50 focus:bg-muted/50 transition-colors"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Profile
                                </Link>
                                <Link
                                    href="/dashboard"
                                    className="w-full text-left px-3 py-2 text-sm flex items-center cursor-pointer hover:bg-muted/50 focus:bg-muted/50 transition-colors"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    Dashboard
                                </Link>
                                <Link
                                    href="/settings"
                                    className="w-full text-left px-3 py-2 text-sm flex items-center cursor-pointer hover:bg-muted/50 focus:bg-muted/50 transition-colors"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Settings
                                </Link>
                            </div>
                            <div className="border-t border-border/50">
                                <Link
                                    href="/"
                                    className="w-full text-left px-3 py-2 text-sm flex items-center cursor-pointer hover:bg-destructive/10 focus:bg-destructive/10 transition-colors text-destructive"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Logout
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}