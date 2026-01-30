import { Zap, MessageCircle, Trophy, User, TrendingUp, Lock } from "lucide-react"

const features = [
    {
        icon: Zap,
        title: "Real-Time Matches",
        description: "Play lightning-fast matches with players worldwide with zero latency.",
    },
    {
        icon: MessageCircle,
        title: "In-Game Chat",
        description: "Communicate with opponents and teammates during matches.",
    },
    {
        icon: Trophy,
        title: "Tournaments",
        description: "Join competitive tournaments and showcase your skills.",
    },
    {
        icon: User,
        title: "Profiles",
        description: "Build your reputation with detailed player profiles.",
    },
    {
        icon: TrendingUp,
        title: "Leaderboard",
        description: "Track your ranking and compete against the best.",
    },
    {
        icon: Lock,
        title: "Secure Login",
        description: "Enterprise-grade security for your account protection.",
    },
]

export default function Features() {
    return (
        <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Everything You Need</span>
                <br />
                <span className="text-foreground">to Play & Win</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
                Comprehensive tools and features designed for competitive players.
            </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                <div
                    key={idx}
                    className="bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 group overflow-hidden rounded-xl p-6"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <div className="relative space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                        <Icon size={24} className="text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
        </section>
    )
}
