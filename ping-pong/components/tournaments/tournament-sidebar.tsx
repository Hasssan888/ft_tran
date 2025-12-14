"use client"

import { Trophy, Users, Zap, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const activeTournaments = [
    { name: "Elite Masters Series", position: "32/32", status: "In Progress" },
    { name: "Weekly Challenge", position: "128/512", status: "In Progress" },
]

const onlineFriends = [
    { name: "Alex_Pro", online: true },
    { name: "Maya_Champ", online: true },
    { name: "Jordan_Elite", online: false },
]

export default function TournamentSidebar() {
    return (
        <div className="w-full lg:w-80 space-y-4">
        {/* Your Tournaments */}
        <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="font-bold mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-accent" />
            Your Tournaments
            </h3>
            <div className="space-y-3">
            {activeTournaments.map((t, idx) => (
                <div key={idx} className="bg-background/50 rounded-lg p-3 hover:bg-background transition-colors">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                    <span>{t.position}</span>
                    <span className="text-accent">{t.status}</span>
                </div>
                </div>
            ))}
            <Button variant="outline" className="w-full mt-2 bg-transparent">
                View All
            </Button>
            </div>
        </div>

        {/* Quick Join */}
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/50 rounded-xl p-5">
            <h3 className="font-bold mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            Quick Join
            </h3>
            <p className="text-sm text-muted-foreground mb-4">Join an active tournament right now</p>
            <Button className="w-full bg-gradient-to-r from-primary to-accent">Find Match</Button>
        </div>

        {/* Online Friends */}
        <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            Online Friends
            </h3>
            <div className="space-y-2">
            {onlineFriends.map((f, idx) => (
                <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${f.online ? "bg-accent" : "bg-muted"}`}></div>
                    <p className="text-sm font-medium text-foreground">{f.name}</p>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">
                    Invite
                </Button>
                </div>
            ))}
            </div>
        </div>

        {/* Notifications */}
        <div className="bg-card border border-border/50 rounded-xl p-5">
            <h3 className="font-bold mb-3 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-accent" />
            Notifications
            </h3>
            <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">• Spring Championship starts in 5 days</p>
            <p className="text-muted-foreground">• Weekly Challenge ends in 2 days</p>
            <p className="text-muted-foreground">• You moved up 45 spots in rankings</p>
            </div>
        </div>
        </div>
    )
}
