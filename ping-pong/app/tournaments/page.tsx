"use client"

import { useState } from "react"
import TournamentNavbar from "@/components/tournaments/tournament-navbar"
import TournamentLayout from "@/components/tournaments/tournament-layout"
import TournamentList from "@/components/tournaments/tournament-list"
import TournamentSidebar from "@/components/tournaments/tournament-sidebar"

export default function TournamentsPage() {
    const [activeTab, setActiveTab] = useState("upcoming")
    const [selectedTournament, setSelectedTournament] = useState<string | null>(null)

    return (
        <main className="min-h-screen bg-background">
        <TournamentNavbar />
        <TournamentLayout>
            <div className="flex-1">
            <TournamentList
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                selectedTournament={selectedTournament}
                setSelectedTournament={setSelectedTournament}
            />
            </div>
            <TournamentSidebar />
        </TournamentLayout>
        </main>
    )
}
