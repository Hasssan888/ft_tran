"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"

export default function RecentMatches() {
    const matches = [
        {
        date: "Nov 25, 2024",
        opponent: "Alex Chen",
        score: "21-18",
        result: "win",
        duration: "8 min",
        },
        {
        date: "Nov 24, 2024",
        opponent: "Sarah Mitchell",
        score: "15-21",
        result: "loss",
        duration: "6 min",
        },
        {
        date: "Nov 23, 2024",
        opponent: "Marcus Johnson",
        score: "21-12",
        result: "win",
        duration: "7 min",
        },
        {
        date: "Nov 22, 2024",
        opponent: "Emma Rodriguez",
        score: "21-19",
        result: "win",
        duration: "9 min",
        },
        {
        date: "Nov 21, 2024",
        opponent: "David Park",
        score: "18-21",
        result: "loss",
        duration: "8 min",
        },
    ]

    return (
        <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Recent Matches</h2>
        <Card className="border border-border/50 bg-card/50 backdrop-blur overflow-hidden">
            <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                <tr className="border-b border-border/50 bg-muted/30">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Opponent</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Score</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Result</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-muted-foreground">Duration</th>
                </tr>
                </thead>
                <tbody>
                {matches.map((match, idx) => (
                    <tr key={idx} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 text-sm text-foreground">{match.date}</td>
                    <td className="px-4 py-3 text-sm text-foreground font-medium">{match.opponent}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-foreground">{match.score}</td>
                    <td className="px-4 py-3 text-sm">
                        <div className="flex items-center gap-2">
                        {match.result === "win" ? (
                            <>
                            <CheckCircle size={16} className="text-green-500" />
                            <span className="text-green-500 font-semibold">Win</span>
                            </>
                        ) : (
                            <>
                            <XCircle size={16} className="text-red-500" />
                            <span className="text-red-500 font-semibold">Loss</span>
                            </>
                        )}
                        </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{match.duration}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </Card>
        </div>
    )
}
