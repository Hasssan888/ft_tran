"use client"

import { useState } from "react"
import ChatNavbar from "./chat-navbar"
import ChatSidebar from "./chat-sidebar"
import ChatArea from "./chat-area"

export default function ChatLayout() {
    const [selectedChat, setSelectedChat] = useState<string | null>("friend-1")
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className="flex h-screen flex-col bg-background">
        <ChatNavbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex flex-1 overflow-hidden">
            <div
            className={`transition-all duration-300 ${
                sidebarOpen ? "w-64" : "w-0"
            } md:w-64 border-r border-border overflow-hidden`}
            >
            <ChatSidebar selectedChat={selectedChat} onSelectChat={setSelectedChat} />
            </div>
            <div className="flex-1 overflow-hidden">
            <ChatArea selectedChat={selectedChat} />
            </div>
        </div>
        </div>
    )
}
