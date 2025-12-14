"use client"

import type React from "react"

export default function TournamentLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="pt-20 min-h-screen bg-background">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex gap-6 flex-col lg:flex-row">{children}</div>
        </div>
        </div>
    )
}
