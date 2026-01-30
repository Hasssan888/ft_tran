"use client"

import { Button } from "@/components/ui/button"
import { User, Lock, Gamepad2, Bell, Palette, AlertTriangle } from "lucide-react"

interface SettingsTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const tabs = [
  { id: "account", label: "Account", icon: User },
  { id: "privacy", label: "Privacy", icon: Lock },
  { id: "game", label: "Game", icon: Gamepad2 },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "danger", label: "Danger Zone", icon: AlertTriangle },
]

export default function SettingsTabs({ activeTab, setActiveTab }: SettingsTabsProps) {
    return (
        <div className="mt-24 md:mt-0 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
        {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
            <Button
                key={tab.id}
                variant={isActive ? "default" : "ghost"}
                className={`justify-start gap-3 whitespace-nowrap md:w-full ${
                isActive
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/50"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveTab(tab.id)}
            >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
            </Button>
            )
        })}
        </div>
    )
}
