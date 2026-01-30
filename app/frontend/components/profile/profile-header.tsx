"use client"

import { Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProfileHeader() {
    return (
        <div className="flex flex-col items-center gap-4 pt-8">
        {/* Avatar */}
        <div className="relative group">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all">
            <span className="text-white font-bold text-5xl">JD</span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-primary/50 transition-all">
            <Edit2 size={16} className="text-white" />
            </button>
        </div>

        {/* User Info */}
        <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground">Jordan Davis</h1>
            <p className="text-accent font-semibold mt-1">Level 12 • Pro Player</p>
        </div>

        {/* Status Tagline */}
        <p className="text-muted-foreground text-center max-w-md">
            🏆 Competitive player grinding for glory. Always up for a challenge!
        </p>

        {/* Edit Button */}
        <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/10 bg-transparent">
            <Edit2 size={16} />
            Edit Profile
        </Button>
        </div>
    )
}
