"use client"

import { useState } from "react"
import GameNavbar from "./game-navbar"
import PongCanvas from "./pong-canvas"
import GameSidebar from "./game-sidebar"
import GameControls from "./game-controls"
import RecentMatches from "./recent-matches"

export default function GameLayout() {
    const [isPaused, setIsPaused] = useState(false)
    const [isSoundOn, setIsSoundOn] = useState(true)
    const [isFullscreen, setIsFullscreen] = useState(false)

    return (
        <div className="min-h-screen bg-background flex flex-col">
        <GameNavbar />

        <div className="flex-1 flex overflow-hidden pt-16">
            {/* Main Game Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">
            <div className="w-full max-w-6xl">
                {/* Pong Canvas */}
                <div className="mb-6">
                <PongCanvas isPaused={isPaused} />
                </div>

                {/* Controls */}
                <GameControls
                isPaused={isPaused}
                setIsPaused={setIsPaused}
                isSoundOn={isSoundOn}
                setIsSoundOn={setIsSoundOn}
                isFullscreen={isFullscreen}
                setIsFullscreen={setIsFullscreen}
                />

                {/* Recent Matches */}
                <div className="mt-6">
                <RecentMatches />
                </div>
            </div>
            </div>

            {/* Sidebar - Hidden on mobile */}
            <div className="hidden xl:block w-80 border-l border-border bg-card/50">
            <GameSidebar />
            </div>
        </div>
        </div>
    )
}
