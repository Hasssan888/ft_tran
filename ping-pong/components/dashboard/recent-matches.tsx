import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const recentMatches = [
{
    id: 1,
    opponent: "Alex Chen",
    result: "Win",
    score: "21-18",
    date: "2 hours ago",
    avatar: "AC",
},
{
    id: 2,
    opponent: "Sarah Williams",
    result: "Loss",
    score: "18-21",
    date: "1 day ago",
    avatar: "SW",
},
{
    id: 3,
    opponent: "Marcus Johnson",
    result: "Win",
    score: "21-15",
    date: "2 days ago",
    avatar: "MJ",
},
{
    id: 4,
    opponent: "Emma Davis",
    result: "Win",
    score: "21-12",
    date: "3 days ago",
    avatar: "ED",
},
]

export default function RecentMatches() {
    return (
        <div className="rounded-xl bg-card border border-border/50 p-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Recent Matches</h2>
        <div className="space-y-4">
            {recentMatches.map((match) => (
            <div
                key={match.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
            >
                <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-sm font-semibold">
                    {match.avatar}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold text-foreground">{match.opponent}</p>
                    <p className="text-xs text-muted-foreground">{match.date}</p>
                </div>
                </div>
                <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="font-semibold text-foreground">{match.score}</p>
                </div>
                <Badge
                    variant={match.result === "Win" ? "default" : "secondary"}
                    className={`${
                    match.result === "Win"
                        ? "bg-green-500/20 text-green-300 border-green-500/30"
                        : "bg-red-500/20 text-red-300 border-red-500/30"
                    }`}
                >
                    {match.result}
                </Badge>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}
