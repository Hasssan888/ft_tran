"use client"

export default function TournamentBracket() {
    return (
        <div className="bg-card border border-border/50 rounded-xl p-6 overflow-x-auto">
        <div className="min-w-max">
            {/* Bracket Visualization */}
            <div className="flex gap-8">
            {/* Round 1 */}
            <div className="space-y-4">
                <h3 className="text-xs font-bold text-muted-foreground mb-4">ROUND 1</h3>
                {[1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    className="bg-background/50 rounded-lg p-3 w-40 border border-border/50 hover:border-primary/50 transition-colors"
                >
                    <p className="text-sm font-semibold text-foreground">Match {i}</p>
                    <div className="text-xs text-muted-foreground mt-2">
                    <p>Player A vs Player B</p>
                    <p className="mt-1">March 15, 2:00 PM</p>
                    </div>
                </div>
                ))}
            </div>

            {/* Round 2 */}
            <div className="space-y-8">
                <h3 className="text-xs font-bold text-muted-foreground mb-4">ROUND 2</h3>
                {[1, 2].map((i) => (
                <div
                    key={i}
                    className="bg-background/50 rounded-lg p-3 w-40 border border-border/50 hover:border-primary/50 transition-colors"
                >
                    <p className="text-sm font-semibold text-foreground">Match {i}</p>
                    <div className="text-xs text-muted-foreground mt-2">
                    <p>TBD</p>
                    </div>
                </div>
                ))}
            </div>

            {/* Finals */}
            <div className="flex flex-col justify-center">
                <h3 className="text-xs font-bold text-muted-foreground mb-4">FINALS</h3>
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-4 w-40 border border-primary/50">
                <p className="text-sm font-bold gradient-text">Championship</p>
                <div className="text-xs text-muted-foreground mt-2">
                    <p>TBD</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
