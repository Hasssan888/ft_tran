"use client"

import { Button } from "@/components/ui/button"
import { Gamepad2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HeroWelcome() {
    const router = useRouter()

    return (
        <div className="pt-20 md:pt-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 border border-primary/30 p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Welcome back, <span className="gradient-text">Player!</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
                Ready to play your next match? Check out live tournaments and challenge friends.
            </p>
            <Button
                onClick={() => router.push("/game")}
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50"
            >
                <Gamepad2 className="w-4 h-4 mr-2" />
                Play Now
            </Button>
            </div>
        </div>
        </div>
    )
}
