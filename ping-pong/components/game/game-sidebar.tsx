"use client"

import { Users, MessageSquare, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function GameSidebar() {
    return (
        <div className="h-full overflow-y-auto flex flex-col">
        {/* Match Stats */}
        <div className="p-4 border-b border-border">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
            <Trophy size={16} className="text-primary" />
            Match Info
            </h3>

            <div className="space-y-3">
            {/* Your Stats */}
            <Card className="p-3 bg-primary/5 border-primary/20">
                <p className="text-xs text-muted-foreground mb-2">Your Stats</p>
                <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
                <div>
                    <p className="text-xs text-muted-foreground">Wins</p>
                    <p className="text-primary">128</p>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground">Losses</p>
                    <p className="text-foreground">42</p>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground">XP</p>
                    <p className="text-accent">2.5k</p>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground">Rank</p>
                    <p className="text-primary">Elite</p>
                </div>
                </div>
            </Card>

            {/* Opponent Stats */}
            <Card className="p-3 bg-secondary/5 border-secondary/20">
                <p className="text-xs text-muted-foreground mb-2">Opponent Stats</p>
                <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
                <div>
                    <p className="text-xs text-muted-foreground">Wins</p>
                    <p className="text-secondary">94</p>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground">Losses</p>
                    <p className="text-foreground">31</p>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground">XP</p>
                    <p className="text-accent">2.1k</p>
                </div>
                <div>
                    <p className="text-xs text-muted-foreground">Rank</p>
                    <p className="text-secondary">Pro</p>
                </div>
                </div>
            </Card>
            </div>
        </div>

        {/* Friends Online */}
        <div className="p-4 border-b border-border">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
            <Users size={16} className="text-accent" />
            Friends Online
            </h3>

            <div className="space-y-2">
            {["Alex", "Jordan", "Casey", "Morgan"].map((name) => (
                <div
                key={name}
                className="flex items-center justify-between p-2 rounded-lg bg-card/50 hover:bg-card/80 transition-colors"
                >
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm font-medium">{name}</span>
                </div>
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                    Invite
                </Button>
                </div>
            ))}
            </div>
        </div>

        {/* Chat */}
        <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
            <MessageSquare size={16} className="text-primary" />
            Quick Chat
            </h3>

            <div className="flex-1 overflow-y-auto mb-3 space-y-2">
            <div className="text-xs bg-primary/10 p-2 rounded border border-primary/20">
                <p className="font-semibold text-primary">You</p>
                <p className="text-foreground">nice serve!</p>
            </div>
            <div className="text-xs bg-secondary/10 p-2 rounded border border-secondary/20">
                <p className="font-semibold text-secondary">Opponent</p>
                <p className="text-foreground">thanks! good match</p>
            </div>
            </div>

            <div className="flex gap-2">
            <input
                type="text"
                placeholder="Message..."
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button size="sm" className="px-3 rounded-lg">
                Send
            </Button>
            </div>
        </div>
        </div>
    )
}
