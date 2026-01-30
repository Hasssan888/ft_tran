"use client"

import { useState } from "react"
import SettingsLayout from "@/components/settings/settings-layout"
import SettingsNavbar from "@/components/settings/settings-navbar"

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("account")

    return (
        <main className="min-h-screen bg-background">
        <SettingsNavbar />
        <SettingsLayout activeTab={activeTab} setActiveTab={setActiveTab} />
        </main>
    )
}
