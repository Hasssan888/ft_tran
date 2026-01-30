"use client"

import SettingsTabs from "./settings-tabs"
import AccountSettings from "./account-settings"
import PrivacySettings from "./privacy-settings"
import GameSettings from "./game-settings"
import NotificationSettings from "./notification-settings"
import AppearanceSettings from "./appearance-settings"
import DangerZone from "./danger-zone"

interface SettingsLayoutProps {
    activeTab: string
    setActiveTab: (tab: string) => void
}

export default function SettingsLayout({ activeTab, setActiveTab }: SettingsLayoutProps) {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
        {/* Tabs Navigation - Vertical on Desktop, Horizontal on Mobile */}
        <div className="w-full md:w-48 flex-shrink-0">
            <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
            {activeTab === "account" && <AccountSettings />}
            {activeTab === "privacy" && <PrivacySettings />}
            {activeTab === "game" && <GameSettings />}
            {activeTab === "notifications" && <NotificationSettings />}
            {activeTab === "appearance" && <AppearanceSettings />}
            {activeTab === "danger" && <DangerZone />}
        </div>
        </div>
    )
}
