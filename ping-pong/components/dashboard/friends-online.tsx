"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const friendsOnline = [
    { id: 1, name: "Alex", avatar: "A", online: true },
    { id: 2, name: "Jordan", avatar: "J", online: true },
    { id: 3, name: "Casey", avatar: "C", online: true },
    { id: 4, name: "Taylor", avatar: "T", online: false },
    { id: 5, name: "Riley", avatar: "R", online: true },
    { id: 6, name: "Morgan", avatar: "M", online: true },
]

export default function FriendsOnline() {
    return (
        <div className="rounded-xl bg-card border border-border/50 p-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Friends Online</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
            {friendsOnline.map((friend) => (
            <div key={friend.id} className="flex flex-col items-center gap-2 flex-shrink-0">
                <div className="relative">
                <Avatar className="w-16 h-16 border-2 border-border/50 hover:border-primary/50 transition-colors cursor-pointer">
                    <AvatarFallback
                    className={`${
                        friend.online
                        ? "bg-gradient-to-br from-green-500 to-emerald-500"
                        : "bg-gradient-to-br from-muted to-muted-foreground/30"
                    } text-white font-semibold text-lg`}
                    >
                    {friend.avatar}
                    </AvatarFallback>
                </Avatar>
                {friend.online && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-card"></div>
                )}
                </div>
                <p className="text-sm font-medium text-foreground text-center">{friend.name}</p>
                <Button size="sm" variant="outline" className="w-full text-xs bg-transparent">
                Invite
                </Button>
            </div>
            ))}
        </div>
        </div>
    )
}
