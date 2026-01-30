import { Flame, Medal, Target } from "lucide-react"

const stats = [
    {
        icon: Gamepad2,
        label: "Matches Played",
        value: "42",
        color: "from-blue-500 to-blue-600",
    },
    {
        icon: Flame,
        label: "Win Rate",
        value: "68%",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: Medal,
        label: "Current Rank",
        value: "#124",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Target,
        label: "XP Level",
        value: "Level 7",
        color: "from-green-500 to-emerald-500",
    },  
]

import { Gamepad2 } from "lucide-react"

export default function StatsOverview() {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((stat, idx) => {
        const Icon = stat.icon
        return (
        <div
            key={idx}
            className="relative group overflow-hidden rounded-xl bg-card border border-border/50 p-6 hover:border-primary/50 transition-all duration-300"
        >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Neon corner accent */}
            <div className="absolute top-0 right-0 w-1 h-12 bg-gradient-to-b from-primary via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
            <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
            >
                <Icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-muted-foreground text-sm font-medium mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
        </div>
        )
    })}
    </div>
    )
}
