"use client"

import { useState } from "react"
import { ArrowLeft, Users, Trophy, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import TournamentBracket from "./tournament-bracket"
import ParticipantsList from "./participants-list"
import MatchSchedule from "./match-schedule"

export default function TournamentDetails({ tournamentId, onBack }: { tournamentId: string; onBack: () => void }) {
    const [activeTab, setActiveTab] = useState("bracket")

    // Mock tournament data
    const tournament = {
        name: "Spring Championship 2025",
        description: "International online championship for ping pong enthusiasts.",
        date: "Mar 15, 2025",
        entryFee: "$25",
        type: "Solo",
        prizePool: "$10,000",
        participants: 128,
        rules: "Best of 3 matches. Knockout format. Winners advance automatically.",
    }

    return (
        <div className="flex-1 space-y-6">
        {/* Header with Back Button */}
        <div className="flex items-center gap-3 mb-6">
            <Button onClick={onBack} variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
            <h1 className="text-3xl font-bold gradient-text">{tournament.name}</h1>
            <p className="text-muted-foreground mt-1">{tournament.description}</p>
            </div>
        </div>

        {/* Info Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
            { icon: Trophy, label: "Prize Pool", value: tournament.prizePool },
            { icon: Users, label: "Participants", value: tournament.participants },
            { icon: Zap, label: "Entry Fee", value: tournament.entryFee },
            { icon: Trophy, label: "Format", value: tournament.type },
            ].map((item, idx) => {
            const Icon = item.icon
            return (
                <div key={idx} className="bg-card border border-border/50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-accent" />
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
                <p className="font-semibold text-foreground">{item.value}</p>
                </div>
            )
            })}
        </div>

        {/* Action Button */}
        <Button
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50"
        >
            Join Tournament
        </Button>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border/50">
            {[
            { id: "bracket", label: "Bracket" },
            { id: "participants", label: "Participants" },
            { id: "schedule", label: "Schedule" },
            ].map((tab) => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
            >
                {tab.label}
            </button>
            ))}
        </div>

        {/* Tab Content */}
        {activeTab === "bracket" && <TournamentBracket />}
        {activeTab === "participants" && <ParticipantsList />}
        {activeTab === "schedule" && <MatchSchedule />}

        {/* Tournament Rules */}
        <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="font-bold mb-3 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-accent" />
            Tournament Rules
            </h3>
            <p className="text-foreground text-sm leading-relaxed">{tournament.rules}</p>
        </div>
        </div>
    )
}
