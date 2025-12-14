"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GameSettings() {
    const [soundEffects, setSoundEffects] = useState(true)
    const [backgroundMusic, setBackgroundMusic] = useState(true)
    const [difficulty, setDifficulty] = useState("medium")
    const [aiSpeed, setAiSpeed] = useState("normal")

    return (
        <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold gradient-text">Game Settings</h2>
            <p className="text-muted-foreground mt-1">Customize your gameplay experience</p>
        </div>

        {/* Sound Effects */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Sound Effects</CardTitle>
            <CardDescription>Enable or disable game sound effects</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm">Sound effects</span>
                <button
                onClick={() => setSoundEffects(!soundEffects)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                    soundEffects ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                }`}
                >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    soundEffects ? "translate-x-6" : "translate-x-0.5"
                    }`}
                />
                </button>
            </div>
            </CardContent>
        </Card>

        {/* Background Music */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Background Music</CardTitle>
            <CardDescription>Enable or disable background music</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm">Background music</span>
                <button
                onClick={() => setBackgroundMusic(!backgroundMusic)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                    backgroundMusic ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                }`}
                >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    backgroundMusic ? "translate-x-6" : "translate-x-0.5"
                    }`}
                />
                </button>
            </div>
            </CardContent>
        </Card>

        {/* Difficulty */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Game Difficulty</CardTitle>
            <CardDescription>Choose your preferred difficulty level</CardDescription>
            </CardHeader>
            <CardContent>
            <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger className="bg-input border-border/50">
                <SelectValue />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
            </Select>
            </CardContent>
        </Card>

        {/* AI Speed */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>AI Behavior</CardTitle>
            <CardDescription>Adjust AI opponent speed and intelligence</CardDescription>
            </CardHeader>
            <CardContent>
            <Select value={aiSpeed} onValueChange={setAiSpeed}>
                <SelectTrigger className="bg-input border-border/50">
                <SelectValue />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="slow">Slow</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="fast">Fast</SelectItem>
                <SelectItem value="insane">Insane</SelectItem>
                </SelectContent>
            </Select>
            </CardContent>
        </Card>
        </div>
    )
}
