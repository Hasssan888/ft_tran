import { Medal } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const topPlayers = [
    { rank: 1, name: "Phoenix", score: "15,240 XP", avatar: "P" },
    { rank: 2, name: "Striker", score: "14,890 XP", avatar: "S" },
    { rank: 3, name: "Velocity", score: "14,210 XP", avatar: "V" },
]

export default function LeaderboardPreview() {
    return (
    <div className="rounded-xl bg-card border border-border/50 p-6 h-full">
    <div className="flex items-center gap-2 mb-6">
        <Medal className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">Top Players</h2>
    </div>
    <div className="space-y-4">
        {topPlayers.map((player) => (
        <div
            key={player.rank}
            className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
        >
            <div className="text-lg font-bold text-primary">{`#${player.rank}`}</div>
            <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                {player.avatar}
            </AvatarFallback>
            </Avatar>
            <div className="flex-1">
            <p className="font-semibold text-foreground">{player.name}</p>
            <p className="text-xs text-muted-foreground">{player.score}</p>
            </div>
        </div>
        ))}
    </div>
    <Button className="w-full mt-6 bg-gradient-to-r from-primary/50 to-secondary/50 hover:from-primary to-secondary">
        View Full Leaderboard
    </Button>
    </div>
)
}
