"use client"

import { Card } from "@/components/ui/card"
import { Lock, Bell, Shield } from "lucide-react"

export default function SettingsSidebar() {
    const settings = [
        {
        icon: Lock,
        label: "Privacy",
        description: "Control who sees your profile",
        action: "Manage",
        },
        {
        icon: Bell,
        label: "Notifications",
        description: "Customize your alerts",
        action: "Configure",
        },
        {
        icon: Shield,
        label: "Security",
        description: "Password & 2FA settings",
        action: "Update",
        },
    ]

    return (
        <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Quick Settings</h2>
        <Card className="border border-border/50 bg-card/50 backdrop-blur overflow-hidden">
            {settings.map((setting, idx) => {
            const Icon = setting.icon
            return (
                <div
                key={setting.label}
                className={`p-4 hover:bg-muted/30 transition-colors cursor-pointer group ${
                    idx !== settings.length - 1 ? "border-b border-border/50" : ""
                }`}
                >
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary" />
                    </div>
                    <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{setting.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{setting.description}</p>
                    </div>
                </div>
                </div>
            )
            })}
        </Card>
        </div>
    )
}
