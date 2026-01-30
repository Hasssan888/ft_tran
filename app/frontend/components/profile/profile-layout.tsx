"use client"

import type React from "react"

import { useState } from "react"
import ProfileNavbar from "./profile-navbar"

export default function ProfileLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-background">
        <ProfileNavbar />
        <div className="pt-20 px-4 md:px-8 pb-8">
            <div className="max-w-7xl mx-auto">{children}</div>
        </div>
        </div>
    )
}
