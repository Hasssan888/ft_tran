import { Trophy, Calendar, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const tournaments = [
    {
        id: 1,
        name: "Spring Championship",
        date: "March 15, 2024",
        players: "128",
        status: "Registration Open",
        prize: "$5,000",
    },
    {
        id: 2,
        name: "Weekend Warriors",
        date: "March 10, 2024",
        players: "64",
        status: "Starting Soon",
        prize: "$1,000",
    },
    {
        id: 3,
        name: "Beginner's Cup",
        date: "March 12, 2024",
        players: "32",
        status: "Registration Open",
        prize: "$500",
    },
]

export default function UpcomingTournaments() {
    return (
        <div className="rounded-xl bg-card border border-border/50 p-6">
        <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Upcoming Tournaments</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
            <div
                key={tournament.id}
                className="relative overflow-hidden rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 group"
            >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-2">{tournament.name}</h3>
                    <Badge className="bg-gradient-to-r from-primary/30 to-secondary/30 text-primary border-primary/50">
                    {tournament.status}
                    </Badge>
                </div>

                <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {tournament.date}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {tournament.players} Players
                    </div>
                    <div className="text-lg font-bold text-primary">{tournament.prize}</div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary/50 to-secondary/50 hover:from-primary hover:to-secondary text-foreground">
                    Join Tournament
                </Button>
                </div>
            </div>
            ))}
        </div>
        </div>
    )
}
