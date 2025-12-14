"use client"

import { useState } from "react"
import { Search, Trophy, Clock, TrendingUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import TournamentCard from "./tournament-card"
import TournamentDetails from "./tournament-details"

const upcomingTournaments = [
  {
    id: "1",
    name: "Spring Championship 2025",
    date: "Mar 15, 2025",
    type: "Solo",
    entryFee: "$25",
    status: "upcoming",
    participants: 128,
    prizePool: "$10,000",
    description: "International online championship for ping pong enthusiasts.",
  },
  {
    id: "2",
    name: "Doubles Championship",
    date: "Mar 22, 2025",
    type: "Team",
    entryFee: "$50",
    status: "upcoming",
    participants: 64,
    prizePool: "$15,000",
    description: "Team-based tournament for doubles players.",
  },
  {
    id: "3",
    name: "Beginner Cup",
    date: "Apr 5, 2025",
    type: "Solo",
    entryFee: "$10",
    status: "upcoming",
    participants: 256,
    prizePool: "$5,000",
    description: "Perfect for players just starting their competitive journey.",
  },
]

const ongoingTournaments = [
  {
    id: "4",
    name: "Elite Masters Series",
    date: "In Progress",
    type: "Solo",
    entryFee: "$100",
    status: "ongoing",
    participants: 32,
    prizePool: "$50,000",
    progress: 65,
    description: "High-stakes tournament for elite players.",
  },
  {
    id: "5",
    name: "Weekly Challenge",
    date: "Ends in 2 days",
    type: "Solo",
    entryFee: "Free",
    status: "ongoing",
    participants: 512,
    prizePool: "$2,000",
    progress: 45,
    description: "Free weekly competition with cash prizes.",
  },
]

const pastTournaments = [
  {
    id: "6",
    name: "Winter Championship 2024",
    date: "Completed",
    type: "Solo",
    entryFee: "$25",
    status: "past",
    participants: 256,
    winner: "ProPlayer_99",
    runnerUp: "Champion_Elite",
    description: "Previous season championship.",
  },
  {
    id: "7",
    name: "Autumn Challenge 2024",
    date: "Completed",
    type: "Team",
    entryFee: "$40",
    status: "past",
    participants: 128,
    winner: "Team Phoenix",
    runnerUp: "Team Dragon",
    description: "Last season team tournament.",
  },
]

export default function TournamentList({
    activeTab,
        setActiveTab,
        selectedTournament,
        setSelectedTournament,
    }: {
    activeTab: string
    setActiveTab: (tab: string) => void
    selectedTournament: string | null
    setSelectedTournament: (id: string | null) => void
    }) {
    const [searchQuery, setSearchQuery] = useState("")

    const getTournaments = () => {
        switch (activeTab) {
        case "ongoing":
            return ongoingTournaments
        case "past":
            return pastTournaments
        default:
            return upcomingTournaments
        }
    }

    const tournaments = getTournaments().filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))

    if (selectedTournament) {
        return <TournamentDetails tournamentId={selectedTournament} onBack={() => setSelectedTournament(null)} />
    }

    return (
        <div className="flex-1 space-y-6">
        {/* Header */}
        <div className="space-y-4">
            <div>
            <h1 className="text-3xl font-bold gradient-text">Tournaments</h1>
            <p className="text-muted-foreground mt-2">Compete with players worldwide and win prizes</p>
            </div>

            {/* Search */}
            <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
                placeholder="Search tournaments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border/50"
            />
            </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border/50">
            {[
            { id: "upcoming", label: "Upcoming", icon: Clock },
            { id: "ongoing", label: "Ongoing", icon: Trophy },
            { id: "past", label: "Past", icon: TrendingUp },
            ].map((tab) => {
            const Icon = tab.icon
            return (
                <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium text-sm flex items-center gap-2 border-b-2 transition-colors ${
                    activeTab === tab.id
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
                >
                <Icon className="w-4 h-4" />
                {tab.label}
                </button>
            )
            })}
        </div>

        {/* Tournament Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tournaments.map((tournament) => (
            <TournamentCard
                key={tournament.id}
                tournament={tournament}
                onClick={() => setSelectedTournament(tournament.id)}
            />
            ))}
        </div>

        {tournaments.length === 0 && (
            <div className="text-center py-12">
            <Trophy className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">No tournaments found</p>
            </div>
        )}
        </div>
    )
}
