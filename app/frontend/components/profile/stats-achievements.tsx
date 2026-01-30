"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Zap, Award, TrendingUp } from "lucide-react"

export default function StatsAchievements() {
    const stats = [
        {
        icon: Trophy,
        label: "Total Wins",
        value: "487",
        change: "+12 this month",
        color: "from-primary to-blue-500",
        },
        {
        icon: TrendingUp,
        label: "Total Losses",
        value: "89",
        change: "Win Rate: 84.5%",
        color: "from-accent to-purple-500",
        },
        {
        icon: Zap,
        label: "Current XP",
        value: "12,450",
        change: "Level 12 • 85% to 13",
        color: "from-green-500 to-emerald-500",
        },
        {
        icon: Award,
        label: "Global Rank",
        value: "#142",
        change: "↑ 8 positions",
        color: "from-yellow-500 to-orange-500",
        },
    ]

    return (
        <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Stats & Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => {
            const Icon = stat.icon
            return (
                <Card
                key={stat.label}
                className="p-4 border border-border/50 bg-card/50 backdrop-blur hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all group cursor-pointer"
                >
                <div className="flex items-start gap-3">
                    <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:shadow-lg transition-all`}
                    >
                    <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                    <p className="text-muted-foreground text-xs font-medium">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-accent mt-2">{stat.change}</p>
                    </div>
                </div>
                </Card>
            )
            })}
        </div>

        {/* Achievements Section */}
        <div className="mt-8">
            <h2 className="text-xl font-bold text-foreground mb-4">Achievements</h2>
            <Card className="p-6 border border-border/50 bg-card/50 backdrop-blur">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                { emoji: "🏆", name: "Champion" },
                { emoji: "⚡", name: "On Fire" },
                { emoji: "🎯", name: "Precision" },
                { emoji: "🌟", name: "Rising Star" },
                { emoji: "💪", name: "Unstoppable" },
                { emoji: "🎖️", name: "Legendary" },
                ].map((achievement) => (
                <div
                    key={achievement.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all cursor-pointer group"
                >
                    <span className="text-3xl group-hover:scale-110 transition-transform">{achievement.emoji}</span>
                    <p className="text-xs text-muted-foreground text-center">{achievement.name}</p>
                </div>
                ))}
            </div>
            </Card>
        </div>
        </div>
    )
}
