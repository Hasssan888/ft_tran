"use client"

import { Trophy, TrendingUp, Zap, Users } from "lucide-react"

export default function LeaderboardSidebar() {
    return (
        <div className="hidden lg:flex flex-col gap-6 w-80">
        {/* Your Rank Card */}
        <div className="bg-gradient-to-br from-primary via-accent to-secondary p-[2px] rounded-xl overflow-hidden shadow-lg shadow-primary/50">
            <div className="bg-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
                <Trophy size={24} className="text-primary" />
                <h3 className="text-lg font-bold">Your Rank</h3>
            </div>

            <div className="text-center py-4 border-b border-border mb-4">
                <div className="text-5xl font-bold gradient-text">#247</div>
                <p className="text-muted-foreground text-sm mt-2">Global Ranking</p>
            </div>

            <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Level</span>
                <span className="font-semibold text-primary">28</span>
                </div>
                <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Current XP</span>
                <span className="font-semibold">45,230</span>
                </div>
                <div className="flex justify-between items-center">
                <span className="text-muted-foreground">To Next Level</span>
                <span className="font-semibold text-accent">4,770</span>
                </div>
            </div>

            <div className="mt-4 bg-muted/50 rounded-lg h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent h-full w-[82%]"></div>
            </div>
            </div>
        </div>

        {/* Recent Stats */}
        <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={20} className="text-accent" />
            <h3 className="font-bold">Recent Stats</h3>
            </div>

            <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Matches Played</span>
                <span className="font-semibold">47</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Win Rate</span>
                <span className="font-semibold text-green-400">68.5%</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Best Streak</span>
                <span className="font-semibold text-primary">12</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Avg Points</span>
                <span className="font-semibold">1,245</span>
            </div>
            </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
            <Zap size={20} className="text-primary" />
            <h3 className="font-bold">Quick Actions</h3>
            </div>

            <div className="space-y-2">
            <button className="w-full py-2 px-4 bg-primary/20 text-primary hover:bg-primary/40 rounded-lg text-sm font-semibold transition">
                View Full Profile
            </button>
            <button className="w-full py-2 px-4 bg-accent/20 text-accent hover:bg-accent/40 rounded-lg text-sm font-semibold transition">
                Challenge Top Player
            </button>
            </div>
        </div>

        {/* Friends Online */}
        <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
            <Users size={20} className="text-secondary" />
            <h3 className="font-bold">Friends Online</h3>
            </div>

            <div className="space-y-3">
            {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
                    <div>
                    <div className="text-sm font-semibold">Friend{i}</div>
                    <div className="text-xs text-muted-foreground">Rank #{50 * i}</div>
                    </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
            ))}
            </div>
        </div>
        </div>
    )
}
