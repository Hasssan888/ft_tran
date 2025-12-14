"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function AppearanceSettings() {
    const [theme, setTheme] = useState("dark")
    const [accentColor, setAccentColor] = useState("purple")
    const [fontSize, setFontSize] = useState("normal")

    const colors = [
        { id: "purple", label: "Purple", class: "bg-violet-600" },
        { id: "blue", label: "Blue", class: "bg-blue-600" },
        { id: "cyan", label: "Cyan", class: "bg-cyan-500" },
        { id: "green", label: "Green", class: "bg-green-500" },
    ]

    return (
        <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold gradient-text">Appearance Settings</h2>
            <p className="text-muted-foreground mt-1">Customize how PingPong Arena looks</p>
        </div>

        {/* Theme */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>Choose your preferred theme</CardDescription>
            </CardHeader>
            <CardContent>
            <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="bg-input border-border/50">
                <SelectValue />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="auto">Auto (System)</SelectItem>
                </SelectContent>
            </Select>
            </CardContent>
        </Card>

        {/* Accent Color */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Accent Color</CardTitle>
            <CardDescription>Choose your accent color</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                <button
                    key={color.id}
                    onClick={() => setAccentColor(color.id)}
                    className={`w-full aspect-square rounded-lg transition-all ${color.class} ${
                    accentColor === color.id ? "ring-2 ring-offset-2 ring-foreground" : "opacity-60 hover:opacity-100"
                    }`}
                >
                    <span className="sr-only">{color.label}</span>
                </button>
                ))}
            </div>
            </CardContent>
        </Card>

        {/* Font Size */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Font Size</CardTitle>
            <CardDescription>Adjust text size for readability</CardDescription>
            </CardHeader>
            <CardContent>
            <Select value={fontSize} onValueChange={setFontSize}>
                <SelectTrigger className="bg-input border-border/50">
                <SelectValue />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="large">Large</SelectItem>
                <SelectItem value="xlarge">Extra Large</SelectItem>
                </SelectContent>
            </Select>
            </CardContent>
        </Card>

        {/* Preview */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Preview</CardTitle>
            <CardDescription>See how your settings look</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            <p
                className={`text-xl font-bold ${fontSize === "large" ? "text-lg" : ""} ${fontSize === "xlarge" ? "text-2xl" : ""}`}
            >
                This is how your text will look
            </p>
            <div className="flex gap-2 mt-4">
                <Button className="bg-gradient-to-r from-primary to-accent">Sample Button</Button>
            </div>
            </CardContent>
        </Card>
        </div>
    )
}
