"use client"

import { Flame } from "lucide-react"

const topPlayers = [
  {
    rank: 1,
    name: "AlexPro",
    level: 42,
    xp: 125000,
    wins: 542,
    losses: 38,
    avatar: "/professional-player-1.jpg",
    medal: "🥇",
    color: "from-yellow-500 to-yellow-600",
    glow: "shadow-lg shadow-yellow-500/50",
  },
  {
    rank: 2,
    name: "ShadowKing",
    level: 41,
    xp: 118000,
    wins: 520,
    losses: 45,
    avatar: "/professional-player-2.jpg",
    medal: "🥈",
    color: "from-slate-400 to-slate-500",
    glow: "shadow-lg shadow-slate-400/50",
  },
  {
    rank: 3,
    name: "NeonViper",
    level: 40,
    xp: 108000,
    wins: 505,
    losses: 52,
    avatar: "/professional-player-3.jpg",
    medal: "🥉",
    color: "from-orange-500 to-orange-600",
    glow: "shadow-lg shadow-orange-500/50",
  },
]

export default function TopPlayers() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {topPlayers.map((player, idx) => (
            <div
            key={idx}
            className={`relative bg-gradient-to-br ${player.color} p-[2px] rounded-2xl overflow-hidden ${player.glow} transition-all duration-300 hover:scale-105`}
            >
            <div className="bg-card rounded-2xl p-6 text-center">
                <div className="absolute top-3 right-3 text-3xl">{player.medal}</div>

                {/* Player Avatar */}
                <div className="mb-4 flex justify-center">
                <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${player.color} p-1`}>
                    <img
                    src={player.avatar || "/placeholder.svg"}
                    alt={player.name}
                    className="w-full h-full rounded-full object-cover"
                    />
                </div>
                </div>

                {/* Player Info */}
                <h3 className="text-2xl font-bold mb-1">{player.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                <Flame size={16} className="text-primary" />
                <span className="text-sm text-muted-foreground">Level {player.level}</span>
                </div>

                {/* Stats */}
                <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">XP</span>
                    <span className="font-semibold text-primary">{player.xp.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Wins/Losses</span>
                    <span className="font-semibold">
                    {player.wins}/{player.losses}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Win Rate</span>
                    <span className="font-semibold text-primary">
                    {((player.wins / (player.wins + player.losses)) * 100).toFixed(1)}%
                    </span>
                </div>
                </div>

                {/* Challenge Button */}
                <button
                className={`w-full py-2 px-4 bg-gradient-to-r ${player.color} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition`}
                >
                Challenge
                </button>
            </div>
            </div>
        ))}
        </div>
    )
}
