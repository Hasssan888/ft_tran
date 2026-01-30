"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Users, UserPlus } from "lucide-react"

export default function FriendsSection() {
    const onlineFriends = [
        {
        name: "Alex Chen",
        level: 14,
        status: "In Game",
        avatar: "AC",
        },
        {
        name: "Sarah Mitchell",
        level: 11,
        status: "Online",
        avatar: "SM",
        },
        {
        name: "Marcus Johnson",
        level: 13,
        status: "Online",
        avatar: "MJ",
        },
        {
        name: "Emma Rodriguez",
        level: 10,
        status: "In Lobby",
        avatar: "ER",
        },
    ]

    return (
        <div>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <Users size={20} />
            Friends Online
            </h2>
            <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">{onlineFriends.length}</span>
        </div>

        <Card className="p-4 border border-border/50 bg-card/50 backdrop-blur space-y-3">
            {onlineFriends.map((friend) => (
            <div
                key={friend.name}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors group"
            >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{friend.avatar}</span>
                </div>
                <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{friend.name}</p>
                <p className="text-xs text-muted-foreground">
                    Lvl {friend.level} • {friend.status}
                </p>
                </div>
                <Button
                size="sm"
                variant="outline"
                className="opacity-0 group-hover:opacity-100 transition-opacity gap-1 bg-transparent"
                >
                <UserPlus size={14} />
                Challenge
                </Button>
            </div>
            ))}

            <div className="pt-3 border-t border-border/50">
            <Button
                variant="outline"
                className="w-full gap-2 border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
                <Search size={16} />
                Find More Friends
            </Button>
            </div>
        </Card>
        </div>
    )
}
