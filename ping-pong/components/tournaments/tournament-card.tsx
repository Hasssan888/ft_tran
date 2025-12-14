"use client"

import { Trophy, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface TournamentCardProps {
    tournament: any
    onClick: () => void
}

export default function TournamentCard({ tournament, onClick }: TournamentCardProps) {
    return (
        <div
        onClick={onClick}
        className="group bg-card border border-border/50 rounded-xl p-5 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10"
        >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                {tournament.name}
            </h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {tournament.date}
            </p>
            </div>
            <div
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                tournament.status === "upcoming"
                ? "bg-primary/20 text-primary"
                : tournament.status === "ongoing"
                    ? "bg-accent/20 text-accent"
                    : "bg-muted text-muted-foreground"
            }`}
            >
            {tournament.status === "upcoming" ? "UPCOMING" : tournament.status === "ongoing" ? "LIVE" : "COMPLETED"}
            </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-background/50 rounded-lg p-2">
            <p className="text-xs text-muted-foreground mb-1">Type</p>
            <p className="font-semibold text-sm">{tournament.type}</p>
            </div>
            <div className="bg-background/50 rounded-lg p-2">
            <p className="text-xs text-muted-foreground mb-1">Participants</p>
            <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <p className="font-semibold text-sm">{tournament.participants}</p>
            </div>
            </div>
            <div className="bg-background/50 rounded-lg p-2">
            <p className="text-xs text-muted-foreground mb-1">Entry Fee</p>
            <p className="font-semibold text-sm">{tournament.entryFee}</p>
            </div>
        </div>

        {/* Progress Bar for Ongoing */}
        {tournament.progress && (
            <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-muted-foreground">Tournament Progress</p>
                <p className="text-xs font-semibold text-primary">{tournament.progress}%</p>
            </div>
            <Progress value={tournament.progress} className="h-1.5" />
            </div>
        )}

        {/* Prize or Winner Info */}
        <div className="bg-background/50 rounded-lg p-3 mb-4 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-accent" />
            <div className="flex-1">
            {tournament.status === "past" ? (
                <p className="text-sm">
                <span className="text-muted-foreground">Winner: </span>
                <span className="font-semibold text-foreground">{tournament.winner}</span>
                </p>
            ) : (
                <p className="text-sm">
                <span className="text-muted-foreground">Prize Pool: </span>
                <span className="font-semibold text-foreground">{tournament.prizePool}</span>
                </p>
            )}
            </div>
        </div>

        {/* Action Button */}
        <Button
            onClick={(e) => {
            e.stopPropagation()
            onClick()
            }}
            className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50"
        >
            {tournament.status === "upcoming"
            ? "View & Join"
            : tournament.status === "ongoing"
                ? "Watch Live"
                : "View Results"}
        </Button>
        </div>
    )
}
