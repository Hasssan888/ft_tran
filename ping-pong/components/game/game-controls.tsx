"use client"

import { Pause, Play, Volume2, VolumeX, Maximize2, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GameControlsProps {
    isPaused: boolean
    setIsPaused: (paused: boolean) => void
    isSoundOn: boolean
    setIsSoundOn: (sound: boolean) => void
    isFullscreen: boolean
    setIsFullscreen: (fullscreen: boolean) => void
}

export default function GameControls({ isPaused, setIsPaused, isSoundOn, setIsSoundOn }: GameControlsProps) {
    return (
        <div className="flex gap-2 md:gap-3 justify-center flex-wrap">
        <Button
            onClick={() => setIsPaused(!isPaused)}
            className={`rounded-lg font-semibold transition-all ${
            isPaused ? "bg-accent hover:bg-accent/80" : "bg-primary hover:bg-primary/80"
            }`}
        >
            {isPaused ? (
            <>
                <Play size={18} />
                <span className="hidden sm:inline">Resume</span>
            </>
            ) : (
            <>
                <Pause size={18} />
                <span className="hidden sm:inline">Pause</span>
            </>
            )}
        </Button>

        <Button onClick={() => setIsSoundOn(!isSoundOn)} variant="outline" className="rounded-lg">
            {isSoundOn ? (
            <>
                <Volume2 size={18} />
                <span className="hidden sm:inline">Sound On</span>
            </>
            ) : (
            <>
                <VolumeX size={18} />
                <span className="hidden sm:inline">Sound Off</span>
            </>
            )}
        </Button>

        <Button
            variant="outline"
            className="rounded-lg bg-transparent"
            onClick={() => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen()
            } else {
                document.exitFullscreen()
            }
            }}
        >
            <Maximize2 size={18} />
            <span className="hidden sm:inline">Fullscreen</span>
        </Button>

        <Button variant="destructive" className="rounded-lg ml-auto">
            <LogOut size={18} />
            <span className="hidden sm:inline">Exit Match</span>
        </Button>
        </div>
    )
}
