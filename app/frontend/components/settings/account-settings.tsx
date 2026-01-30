"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload, Check } from "lucide-react"

export default function AccountSettings() {
    const [username, setUsername] = useState("ProPlayer123")
    const [email, setEmail] = useState("player@pingpongarena.com")
    const [saved, setSaved] = useState(false)

    const handleSave = () => {
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
    }

    return (
        <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold gradient-text">Account Settings</h2>
            <p className="text-muted-foreground mt-1">Manage your account information</p>
        </div>

        {/* Avatar Upload */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
            <CardDescription>Upload or change your avatar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-xl">PP</span>
                </div>
                <div className="flex gap-2">
                <Button variant="outline" className="gap-2 bg-transparent">
                    <Upload className="w-4 h-4" />
                    Upload
                </Button>
                <Button variant="ghost" className="text-destructive">
                    Remove
                </Button>
                </div>
            </div>
            </CardContent>
        </Card>

        {/* Username */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Username</CardTitle>
            <CardDescription>Your unique player identifier</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
            <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-input border-border/50 rounded-lg"
                placeholder="Enter username"
            />
            <p className="text-xs text-muted-foreground">
                Choose a unique username (3-20 characters). Only letters, numbers, and underscores allowed.
            </p>
            </CardContent>
        </Card>

        {/* Email */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Email Address</CardTitle>
            <CardDescription>Your account email for notifications and login</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
            <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border/50 rounded-lg"
                placeholder="Enter email"
            />
            <Button variant="outline" className="text-xs bg-transparent">
                Verify Email
            </Button>
            </CardContent>
        </Card>

        {/* Change Password */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Update your password for security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
            <Input type="password" className="bg-input border-border/50 rounded-lg" placeholder="Current password" />
            <Input type="password" className="bg-input border-border/50 rounded-lg" placeholder="New password" />
            <Input type="password" className="bg-input border-border/50 rounded-lg" placeholder="Confirm new password" />
            <p className="text-xs text-muted-foreground">
                Password must be at least 8 characters with a mix of uppercase, lowercase, numbers, and symbols.
            </p>
            </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end">
            <Button onClick={handleSave} className="bg-gradient-to-r from-primary to-accent hover:opacity-90 gap-2">
            {saved ? (
                <>
                <Check className="w-4 h-4" />
                Saved
                </>
            ) : (
                "Save Changes"
            )}
            </Button>
        </div>
        </div>
    )
}
