"use client"

import { useState, useEffect, useRef } from "react"
import { Send, Smile, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
    id: string
    sender: "user" | "other"
    content: string
    timestamp: string
    avatar?: string
}

const mockMessages: Record<string, Message[]> = {
    "friend-1": [
        {
            id: "1",
            sender: "other",
            content: "Hey! Ready for a match?",
            timestamp: "10:30 AM",
            avatar: "/player-avatar.png",
        },
        {
            id: "2",
            sender: "user",
            content: "Let me warm up first",
            timestamp: "10:32 AM",
        },
        {
            id: "3",
            sender: "other",
            content: "Perfect! I'll set up the game room",
            timestamp: "10:35 AM",
            avatar: "/player-avatar.png",
        },
        {
            id: "4",
            sender: "other",
            content: "Let's play a match!",
            timestamp: "10:38 AM",
            avatar: "/player-avatar.png",
        },
    ],
    "friend-2": [
        {
            id: "1",
            sender: "other",
            content: "Tournament bracket is finalized",
            timestamp: "9:15 AM",
            avatar: "/player-avatar.png",
        },
        {
            id: "2",
            sender: "user",
            content: "Looking forward to competing!",
            timestamp: "9:18 AM",
        },
    ],
    "friend-3": [
        {
            id: "1",
            sender: "other",
            content: "Great match earlier!",
            timestamp: "8:45 AM",
            avatar: "/player-avatar.png",
        },
        {
            id: "2",
            sender: "user",
            content: "Thanks! You played well too",
            timestamp: "8:50 AM",
        },
    ],
}

interface ChatAreaProps {
    selectedChat: string | null
}

export default function ChatArea({ selectedChat }: ChatAreaProps) {
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (selectedChat && mockMessages[selectedChat]) {
            setMessages(mockMessages[selectedChat])
        }
    }, [selectedChat])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const handleSendMessage = () => {
        if (!inputValue.trim() || !selectedChat) return

        const newMessage: Message = {
            id: String(Date.now()),
            sender: "user",
            content: inputValue,
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
        }

        setMessages([...messages, newMessage])
        setInputValue("")
    }

    if (!selectedChat) {
        return (
            <div className="h-full flex items-center justify-center bg-background">
                <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-2">Select a chat</h2>
                    <p className="text-muted-foreground">Choose a friend or group to start messaging</p>
                </div>
            </div>
        )
    }

    return (
        <div className="h-full bg-background flex flex-col">
            <div className="h-16 bg-card/95 backdrop-blur-md border-b border-border px-6 flex items-center">
                <h2 className="text-lg font-bold text-foreground">
                    {selectedChat.includes("friend")
                        ? ["Alex Champion", "Jordan Swift", "Casey Thunder", "Morgan Elite"][
                        Number.parseInt(selectedChat.split("-")[1] ?? "1") - 1
                        ]
                        : "Tournament Chat"}
                </h2>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => {
                    const showAvatar =
                        message.sender === "other" &&
                        (index === 0 || messages[index - 1]?.sender === "user" || messages[index - 1]?.sender !== message.sender)

                    return (
                        <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`flex gap-2 max-w-xs lg:max-w-md ${message.sender === "user" ? "flex-row-reverse" : "flex-row"
                                    }`}
                            >
                                {message.sender === "other" && showAvatar && (
                                    <img
                                        src={message.avatar || "/placeholder.svg"}
                                        alt="User"
                                        className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                                    />
                                )}
                                {message.sender === "other" && !showAvatar && <div className="w-8 flex-shrink-0" />}

                                <div>
                                    <div
                                        className={`px-4 py-2 rounded-2xl ${message.sender === "user"
                                            ? "bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-br-none"
                                            : "bg-card border border-border/50 text-foreground rounded-bl-none"
                                            }`}
                                    >
                                        <p className="text-sm break-words">{message.content}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground px-2 mt-1 block">{message.timestamp}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-card/95 backdrop-blur-md border-t border-border">
                <div className="flex gap-3 items-end">
                    <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <Paperclip className="w-5 h-5" />
                    </Button>
                    <Input
                        placeholder="Type a message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault()
                                handleSendMessage()
                            }
                        }}
                        className="bg-input border-border"
                    />
                    <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <Smile className="w-5 h-5" />
                    </Button>
                    <Button
                        onClick={handleSendMessage}
                        size="icon"
                        className="flex-shrink-0 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50"
                    >
                        <Send className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
