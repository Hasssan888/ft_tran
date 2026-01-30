"use client"

import { useState } from "react"
import { Search, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Friend {
  id: string
  name: string
  avatar: string
  status: "online" | "offline" | "away"
  lastMessage?: string
  timestamp?: string
  unread?: number
}

const mockFriends: Friend[] = [
  {
    id: "friend-1",
    name: "Alex Champion",
    avatar: "/player-avatar.png",
    status: "online",
    lastMessage: "Let's play a match!",
    timestamp: "2m",
    unread: 2,
  },
  {
    id: "friend-2",
    name: "Jordan Swift",
    avatar: "/player-avatar.png",
    status: "online",
    lastMessage: "Tournament starts soon",
    timestamp: "5m",
  },
  {
    id: "friend-3",
    name: "Casey Thunder",
    avatar: "/player-avatar.png",
    status: "away",
    lastMessage: "Great match earlier!",
    timestamp: "1h",
  },
  {
    id: "friend-4",
    name: "Morgan Elite",
    avatar: "/player-avatar.png",
    status: "offline",
    lastMessage: "See you tomorrow",
    timestamp: "3h",
  },
  {
    id: "group-1",
    name: "Tournament Chat",
    avatar: "/diverse-group-chat.png",
    status: "online",
    lastMessage: "Finals bracket announced",
    timestamp: "15m",
    unread: 5,
  },
]

interface ChatSidebarProps {
  selectedChat: string | null
  onSelectChat: (chatId: string) => void
}

export default function ChatSidebar({ selectedChat, onSelectChat }: ChatSidebarProps) {
    const [search, setSearch] = useState("")
    const [showOnline, setShowOnline] = useState(true)

    const filtered = mockFriends.filter((friend) => {
        const matchesSearch = friend.name.toLowerCase().includes(search.toLowerCase())
        const matchesStatus = !showOnline || friend.status === "online"
        return matchesSearch && matchesStatus
    })

    return (
        <div className="h-full bg-card flex flex-col overflow-hidden">
        <div className="p-4 border-b border-border space-y-3">
            <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
                placeholder="Search friends..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-input border-border"
            />
            </div>
            <div className="flex gap-2">
            <Button
                variant={showOnline ? "default" : "outline"}
                size="sm"
                className="text-xs"
                onClick={() => setShowOnline(!showOnline)}
            >
                <Users className="w-3 h-3 mr-1" />
                Online
            </Button>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto">
            {filtered.map((friend) => (
            <button
                key={friend.id}
                onClick={() => onSelectChat(friend.id)}
                className={`w-full px-4 py-3 border-b border-border/50 transition-colors text-left hover:bg-primary/5 ${
                selectedChat === friend.id ? "bg-primary/10 border-l-2 border-l-primary" : ""
                }`}
            >
                <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                    <img
                    src={friend.avatar || "/placeholder.svg"}
                    alt={friend.name}
                    className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${
                        friend.status === "online"
                        ? "bg-green-500"
                        : friend.status === "away"
                            ? "bg-yellow-500"
                            : "bg-muted"
                    }`}
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium text-sm text-foreground truncate">{friend.name}</h3>
                    {friend.unread && (
                        <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                        {friend.unread}
                        </span>
                    )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{friend.lastMessage}</p>
                </div>
                </div>
            </button>
            ))}
        </div>
        </div>
    )
}
