"use client"

import { useState } from "react"
import LeaderboardLayout from "@/components/leaderboard/leaderboard-layout"
import TopPlayers from "@/components/leaderboard/top-players"
import LeaderboardTable from "@/components/leaderboard/leaderboard-table"
import LeaderboardSidebar from "@/components/leaderboard/leaderboard-sidebar"

export default function LeaderboardPage() {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <LeaderboardLayout>
        <div className="flex gap-6">
            <div className="flex-1">
            <TopPlayers />
            <LeaderboardTable searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>
            <LeaderboardSidebar />
        </div>
        </LeaderboardLayout>
    )
}
