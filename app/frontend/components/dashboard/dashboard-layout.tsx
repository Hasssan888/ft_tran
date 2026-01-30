import type React from "react"

interface DashboardLayoutProps {
children: React.ReactNode
sidebarOpen: boolean
}

export default function DashboardLayout({ children, sidebarOpen }: DashboardLayoutProps) {
return (
    <div className="flex h-screen bg-background overflow-hidden">
    {children}
    </div>
)
}