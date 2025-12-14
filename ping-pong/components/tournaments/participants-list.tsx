"use client"

import { TrendingUp } from "lucide-react"

const participants = [
    { rank: 1, name: "ProPlayer_99", level: 50, rating: 2850 },
    { rank: 2, name: "Champion_Elite", level: 48, rating: 2740 },
    { rank: 3, name: "MasterMind", level: 47, rating: 2680 },
    { rank: 4, name: "SilentStrike", level: 46, rating: 2620 },
    { rank: 5, name: "LightningBolt", level: 45, rating: 2580 },
]

export default function ParticipantsList() {
    return (
        <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Top seeded participants</p>
        <div className="space-y-2">
            {participants.map((p) => (
            <div
                key={p.rank}
                className="bg-card border border-border/50 rounded-lg p-4 flex items-center justify-between hover:border-primary/50 transition-colors group"
            >
                <div className="flex items-center gap-4 flex-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">
                    {p.rank}
                </div>
                <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{p.name}</p>
                    <p className="text-xs text-muted-foreground">Level {p.level}</p>
                </div>
                </div>
                <div className="flex items-center gap-3">
                <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                    <TrendingUp className="w-3 h-3 text-accent" />
                    <p className="text-sm font-semibold text-foreground">{p.rating}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}
