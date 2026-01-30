"use client"

import { Calendar, Clock } from "lucide-react"

const matches = [
    { id: 1, date: "Mar 15", time: "2:00 PM", player1: "ProPlayer_99", player2: "Champion_Elite", round: "Round 1" },
    { id: 2, date: "Mar 15", time: "3:30 PM", player1: "MasterMind", player2: "SilentStrike", round: "Round 1" },
    { id: 3, date: "Mar 16", time: "2:00 PM", player1: "TBD", player2: "TBD", round: "Round 2" },
]

export default function MatchSchedule() {
    return (
        <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Scheduled matches</p>
        <div className="space-y-3">
            {matches.map((m) => (
            <div
                key={m.id}
                className="bg-card border border-border/50 rounded-lg p-4 hover:border-primary/50 transition-colors"
            >
                <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-primary">{m.round}</span>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {m.date}
                    </div>
                    <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {m.time}
                    </div>
                </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                <div className="text-right flex-1">
                    <p className="font-semibold text-foreground text-sm">{m.player1}</p>
                </div>
                <span className="text-muted-foreground text-xs font-bold">VS</span>
                <div className="text-left flex-1">
                    <p className="font-semibold text-foreground text-sm">{m.player2}</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}
