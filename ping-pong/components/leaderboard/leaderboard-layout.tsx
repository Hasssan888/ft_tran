"use client"

import type React from "react"
import LeaderboardNavbar from "./leaderboard-navbar"

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
        <LeaderboardNavbar />
        <main className="pt-20 px-4 md:px-8 pb-8">
            <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">Global Leaderboard</h1>
                <p className="text-muted-foreground">Climb the ranks and prove your dominance</p>
            </div>
            {children}
            </div>
        </main>
        </div>
    )
}
