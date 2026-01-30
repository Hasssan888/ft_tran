"use client"

import * as React from "react"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
({ className = "", ...props }, ref) => {
    return (
    <div
        ref={ref}
        className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
        {...props}
    />
    )
}
)
Avatar.displayName = "Avatar"

export interface AvatarFallbackProps
extends React.HTMLAttributes<HTMLDivElement> {}

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
({ className = "", ...props }, ref) => {
    return (
    <div
        ref={ref}
        className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}
        {...props}
    />
    )
}
)
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarFallback }