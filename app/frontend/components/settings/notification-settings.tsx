"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotificationSettings() {
    const [emailNotifications, setEmailNotifications] = useState(true)
    const [inAppNotifications, setInAppNotifications] = useState(true)
    const [tournamentReminders, setTournamentReminders] = useState(true)
    const [friendActivity, setFriendActivity] = useState(true)
    const [matchResults, setMatchResults] = useState(true)

    return (
        <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold gradient-text">Notification Settings</h2>
            <p className="text-muted-foreground mt-1">Control when and how you receive notifications</p>
        </div>

        {/* Email Notifications */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Email Notifications</CardTitle>
            <CardDescription>Receive important updates via email</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm">Email notifications</span>
                <button
                onClick={() => setEmailNotifications(!emailNotifications)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                    emailNotifications ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                }`}
                >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    emailNotifications ? "translate-x-6" : "translate-x-0.5"
                    }`}
                />
                </button>
            </div>
            </CardContent>
        </Card>

        {/* In-App Notifications */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>In-App Notifications</CardTitle>
            <CardDescription>Show notifications within the app</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm">In-app notifications</span>
                <button
                onClick={() => setInAppNotifications(!inAppNotifications)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                    inAppNotifications ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                }`}
                >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    inAppNotifications ? "translate-x-6" : "translate-x-0.5"
                    }`}
                />
                </button>
            </div>
            </CardContent>
        </Card>

        {/* Tournament Reminders */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Tournament Reminders</CardTitle>
            <CardDescription>Get notified about upcoming tournaments</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm">Tournament reminders</span>
                <button
                onClick={() => setTournamentReminders(!tournamentReminders)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                    tournamentReminders ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                }`}
                >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    tournamentReminders ? "translate-x-6" : "translate-x-0.5"
                    }`}
                />
                </button>
            </div>
            </CardContent>
        </Card>

        {/* Friend Activity */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Friend Activity</CardTitle>
            <CardDescription>Get notified when friends go online or play matches</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm">Friend activity</span>
                <button
                onClick={() => setFriendActivity(!friendActivity)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                    friendActivity ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                }`}
                >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    friendActivity ? "translate-x-6" : "translate-x-0.5"
                    }`}
                />
                </button>
            </div>
            </CardContent>
        </Card>

        {/* Match Results */}
        <Card className="glass-effect border-primary/20">
            <CardHeader>
            <CardTitle>Match Results</CardTitle>
            <CardDescription>Notifications for your match results and stats</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
                <span className="text-sm">Match result notifications</span>
                <button
                onClick={() => setMatchResults(!matchResults)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                    matchResults ? "bg-gradient-to-r from-primary to-accent" : "bg-muted"
                }`}
                >
                <div
                    className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform ${
                    matchResults ? "translate-x-6" : "translate-x-0.5"
                    }`}
                />
                </button>
            </div>
            </CardContent>
        </Card>
        </div>
    )
}
