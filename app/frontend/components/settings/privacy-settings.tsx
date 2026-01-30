"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PrivacySettings() {
    const [onlineStatus, setOnlineStatus] = useState(true)
    const [friendRequests, setFriendRequests] = useState(true)
    const [chatNotifications, setChatNotifications] = useState(true)
    const [profileVisibility, setProfileVisibility] = useState("friends")

    return (
        <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold gradient-text">Privacy Settings</h2>
            <p className="text-muted-foreground mt-1">Control who can see and contact you</p>
        </div>

        {/* Online Status */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Online Status</CardTitle>
            <CardDescription>Show when you're online to other players</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm">Show online status</span>
                <button
                onClick={() => setOnlineStatus(!onlineStatus)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                    onlineStatus ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                }`}
                >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    onlineStatus ? "translate-x-6" : "translate-x-0.5"
                    }`}
                />
                </button>
            </div>
            </CardContent>
        </Card>

        {/* Friend Requests */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Friend Requests</CardTitle>
            <CardDescription>Allow other players to send you friend requests</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm">Allow friend requests</span>
                <button
                onClick={() => setFriendRequests(!friendRequests)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                    friendRequests ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                }`}
                >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    friendRequests ? "translate-x-6" : "translate-x-0.5"
                    }`}
                />
                </button>
            </div>
            </CardContent>
        </Card>

        {/* Chat Notifications */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Chat Notifications</CardTitle>
            <CardDescription>Receive notifications when friends message you</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm">Enable chat notifications</span>
                <button
                onClick={() => setChatNotifications(!chatNotifications)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                    chatNotifications ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                }`}
                >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    chatNotifications ? "translate-x-6" : "translate-x-0.5"
                    }`}
                />
                </button>
            </div>
            </CardContent>
        </Card>

        {/* Profile Visibility */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Profile Visibility</CardTitle>
            <CardDescription>Control who can view your profile</CardDescription>
            </CardHeader>
            <CardContent>
            <Select value={profileVisibility} onValueChange={setProfileVisibility}>
                <SelectTrigger className="bg-input border-border/50">
                <SelectValue />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="everyone">Everyone</SelectItem>
                <SelectItem value="friends">Friends Only</SelectItem>
                <SelectItem value="private">Private</SelectItem>
                </SelectContent>
            </Select>
            </CardContent>
        </Card>
        </div>
    )
}
