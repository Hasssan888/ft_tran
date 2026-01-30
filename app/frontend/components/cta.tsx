import Link from "next/link"

export default function CTA() {
    return (
        <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30"></div>
            <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary/50 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-secondary/50 rounded-full"></div>
            </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-foreground">Ready to play?</span>
                <br />
                <span className="gradient-text">Join thousands of players online now.</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Start your competitive journey and become a ping pong champion today.
            </p>

            <Link href="/signup">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-foreground hover:shadow-2xl hover:shadow-primary/50 transition-all font-semibold text-lg">
                Start Playing
                </button>
            </Link>
            </div>
        </div>
        </section>
    )
}
