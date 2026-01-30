import { Play } from "lucide-react"
import Link from "next/link"

export default function Hero() {
return (
    <section className="min-h-screen pt-24 pb-20 flex items-center relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="gradient-text">Play. Compete.</span>
            <br />
            <span className="text-foreground">Become a Ping Pong</span>
            <br />
            <span className="gradient-text">Champion.</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
            Challenge your friends, join tournaments, and climb the global leaderboard — all in real time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/signup">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 w-full sm:w-auto">
                Get Started
                </button>
            </Link>
            <button className="px-8 py-3 rounded-lg border border-primary/50 text-foreground font-semibold hover:bg-primary/10 transition-all bg-transparent flex items-center justify-center gap-2 w-full sm:w-auto">
                <Play size={20} />
                Watch Demo
            </button>
            </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-3xl"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-3xl border border-primary/20 backdrop-blur-sm flex items-center justify-center group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
            <div className="text-7xl md:text-8xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                🏓
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
)
}
