"use client"

import { useState } from "react"
import { Search, ChevronUp, ChevronDown } from "lucide-react"

const allPlayers = [
    { rank: 1, name: "AlexPro", level: 42, xp: 125000, wins: 542, losses: 38 },
    { rank: 2, name: "ShadowKing", level: 41, xp: 118000, wins: 520, losses: 45 },
    { rank: 3, name: "NeonViper", level: 40, xp: 108000, wins: 505, losses: 52 },
    { rank: 4, name: "CyberNinja", level: 39, xp: 98000, wins: 478, losses: 62 },
    { rank: 5, name: "PhantomAce", level: 38, xp: 92000, wins: 450, losses: 70 },
    { rank: 6, name: "ThunderStrike", level: 38, xp: 88000, wins: 445, losses: 75 },
    { rank: 7, name: "VortexMaster", level: 37, xp: 82000, wins: 420, losses: 85 },
    { rank: 8, name: "EchoWolf", level: 37, xp: 78000, wins: 410, losses: 95 },
    { rank: 9, name: "NovaBlast", level: 36, xp: 72000, wins: 385, losses: 105 },
    { rank: 10, name: "SilentHunter", level: 36, xp: 68000, wins: 375, losses: 115 },
]

export default function LeaderboardTable({
    searchTerm,
    onSearchChange,
}: {
    searchTerm: string
    onSearchChange: (term: string) => void
}) {
    const [sortBy, setSortBy] = useState<"rank" | "xp" | "wins">("rank")
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

    const filteredPlayers = allPlayers.filter((player) => player.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const sortedPlayers = [...filteredPlayers].sort((a, b) => {
        let compareValue = 0
        if (sortBy === "rank") compareValue = a.rank - b.rank
        if (sortBy === "xp") compareValue = b.xp - a.xp
        if (sortBy === "wins") compareValue = b.wins - a.wins

        return sortOrder === "asc" ? compareValue : -compareValue
    })

    const toggleSort = (field: "rank" | "xp" | "wins") => {
        if (sortBy === field) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        } else {
            setSortBy(field)
            setSortOrder("asc")
        }
    }

    return (
        <div className="space-y-4">
            {/* Search */}
            <div className="relative">
                <Search size={20} className="absolute left-3 top-3 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search player by username..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-border">
                            <th
                                className="text-left py-4 px-4 font-semibold text-muted-foreground cursor-pointer hover:text-foreground transition"
                                onClick={() => toggleSort("rank")}
                            >
                                <div className="flex items-center gap-2">
                                    Rank
                                    {sortBy === "rank" && (sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                                </div>
                            </th>
                            <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Player</th>
                            <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Level</th>
                            <th
                                className="text-left py-4 px-4 font-semibold text-muted-foreground cursor-pointer hover:text-foreground transition"
                                onClick={() => toggleSort("xp")}
                            >
                                <div className="flex items-center gap-2">
                                    XP
                                    {sortBy === "xp" && (sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                                </div>
                            </th>
                            <th
                                className="text-left py-4 px-4 font-semibold text-muted-foreground cursor-pointer hover:text-foreground transition"
                                onClick={() => toggleSort("wins")}
                            >
                                <div className="flex items-center gap-2">
                                    Wins
                                    {sortBy === "wins" && (sortOrder === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
                                </div>
                            </th>
                            <th className="text-left py-4 px-4 font-semibold text-muted-foreground">W/L Ratio</th>
                            <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedPlayers.map((player) => {
                            const winRate = (player.wins / (player.wins + player.losses)) * 100
                            const ratio = winRate.toFixed(1)
                            const isTop3 = player.rank <= 3

                            return (
                                <tr
                                    key={player.rank}
                                    className={`border-b border-border/50 hover:bg-card/50 transition ${isTop3 ? "bg-card/30" : ""}`}
                                >
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${player.rank === 1
                                                        ? "bg-yellow-500/20 text-yellow-400"
                                                        : player.rank === 2
                                                            ? "bg-slate-400/20 text-slate-300"
                                                            : player.rank === 3
                                                                ? "bg-orange-500/20 text-orange-400"
                                                                : "bg-primary/20 text-primary"
                                                    }`}
                                            >
                                                {player.rank}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                                                <img
                                                    src={`/player-avatar-.jpg?height=40&width=40&query=player+avatar+${player.rank}`}
                                                    alt={player.name}
                                                    className="w-full h-full rounded-full object-cover"
                                                />
                                            </div>
                                            <span className="font-semibold">{player.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                                            {player.level}
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="text-accent">{player.xp.toLocaleString()}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span className="font-semibold text-green-400">{player.wins}</span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <span
                                            className={`${winRate > 80 ? "text-green-400" : winRate > 60 ? "text-yellow-400" : "text-red-400"} font-semibold`}
                                        >
                                            {ratio}%
                                        </span>
                                    </td>
                                    <td className="py-4 px-4">
                                        <button className="px-3 py-1 bg-primary/20 text-primary hover:bg-primary/40 rounded-lg text-sm font-semibold transition">
                                            Challenge
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination Info */}
            <div className="text-center text-sm text-muted-foreground py-4">
                Showing {sortedPlayers.length} of {allPlayers.length} players
            </div>
        </div>
    )
}
