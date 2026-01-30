"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import DashboardNavbar from "@/components/dashboard/dashboard-navbar"
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar"
import HeroWelcome from "@/components/dashboard/hero-welcome"
import StatsOverview from "@/components/dashboard/stats-overview"
import RecentMatches from "@/components/dashboard/recent-matches"
import FriendsOnline from "@/components/dashboard/friends-online"
import LeaderboardPreview from "@/components/dashboard/leaderboard-preview"
import UpcomingTournaments from "@/components/dashboard/upcoming-tournaments"
import DashboardFooter from "@/components/dashboard/dashboard-footer"

export default function DashboardPage() {
const [sidebarOpen, setSidebarOpen] = useState(false)
const [sidebarExpanded, setSidebarExpanded] = useState(false)

return (
    <DashboardLayout sidebarOpen={sidebarOpen}>
    {/* Sidebar */}
    <DashboardSidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        onHoverChange={setSidebarExpanded}
    />
    
    {/* Main content area */}
    <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar - synced with sidebar */}
        <DashboardNavbar 
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        sidebarExpanded={sidebarExpanded}
        />
        
        {/* Main content */}
        <main className="flex-1 overflow-auto mt-16">
        <div className="min-h-full flex flex-col">
            <div className="flex-1 p-4 md:p-8 space-y-8">
            <HeroWelcome />
            <StatsOverview />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                <RecentMatches />
                </div>
                <div>
                <LeaderboardPreview />
                </div>
            </div>
            <FriendsOnline />
            <UpcomingTournaments />
            </div>
            <DashboardFooter />
        </div>
        </main>
    </div>
    </DashboardLayout>
)
}