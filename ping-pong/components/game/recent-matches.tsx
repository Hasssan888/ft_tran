"use client"

import { Card } from "@/components/ui/card"

const recentMatches = [
    {
        id: 1,
        opponent: "AlexPlayer",
        result: "Won",
        score: "21-15",
        date: "2 hours ago",
        rank: "Pro",
    },
    {
        id: 2,
        opponent: "JordanPro",
        result: "Lost",
        score: "18-21",
        date: "4 hours ago",
        rank: "Elite",
    },
    {
        id: 3,
        opponent: "CaseyMaster",
        result: "Won",
        score: "21-12",
        date: "1 day ago",
        rank: "Advanced",
    },
    {
        id: 4,
        opponent: "MorganKing",
        result: "Won",
        score: "21-16",
        date: "2 days ago",
        rank: "Pro",
    },
    {
        id: 5,
        opponent: "TaylorChamp",
        result: "Lost",
        score: "15-21",
        date: "3 days ago",
        rank: "Master",
    },
]

export default function RecentMatches() {
    return (
        <Card className="p-6 bg-card/50 border-border">
        <h3 className="text-lg font-bold mb-4 gradient-text">Recent Matches</h3>

        <div className="overflow-x-auto">
            <table className="w-full text-sm">
            <thead>
                <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Opponent</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Result</th>
                <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Score</th>
                <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Date</th>
                </tr>
            </thead>
            <tbody>
                {recentMatches.map((match) => (
                <tr key={match.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">
                        {match.opponent[0]}
                        </div>
                        <div>
                        <p className="font-semibold text-foreground">{match.opponent}</p>
                        <p className="text-xs text-muted-foreground">{match.rank}</p>
                        </div>
                    </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        match.result === "Won"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}
                    >
                        {match.result}
                    </span>
                    </td>
                    <td className="py-3 px-4 text-center font-semibold text-foreground">{match.score}</td>
                    <td className="py-3 px-4 text-right text-muted-foreground">{match.date}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </Card>
    )
}
