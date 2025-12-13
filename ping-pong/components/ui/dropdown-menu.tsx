"use client"

import * as React from "react"

interface DropdownMenuProps {
children: React.ReactNode
}

export function DropdownMenu({ children }: DropdownMenuProps) {
return <div className="relative inline-block text-left">{children}</div>
}

interface DropdownMenuTriggerProps {
children: React.ReactNode
asChild?: boolean
}

export const DropdownMenuTrigger = React.forwardRef<
HTMLButtonElement,
DropdownMenuTriggerProps
>(({ children, asChild, ...props }, ref) => {
const [isOpen, setIsOpen] = React.useState(false)
const Child = asChild ? React.Children.only(children) : null

if (asChild && React.isValidElement(Child)) {
    return React.cloneElement(Child as React.ReactElement<any>, {
    ref,
    onClick: () => setIsOpen(!isOpen),
    ...props
    })
}

return (
    <button ref={ref} onClick={() => setIsOpen(!isOpen)} {...props}>
    {children}
    </button>
)
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

interface DropdownMenuContentProps {
children: React.ReactNode
align?: "start" | "center" | "end"
className?: string
}

export function DropdownMenuContent({
children,
align = "center",
className = ""
}: DropdownMenuContentProps) {
const alignClass = {
    start: "left-0",
    center: "left-1/2 -translate-x-1/2",
    end: "right-0"
}

return (
    <div
    className={`absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${alignClass[align]} ${className}`}
    >
    {children}
    </div>
)
}

interface DropdownMenuItemProps
extends React.HTMLAttributes<HTMLDivElement> {
children: React.ReactNode
}

export function DropdownMenuItem({
children,
className = "",
...props
}: DropdownMenuItemProps) {
return (
    <div
    className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
    {...props}
    >
    {children}
    </div>
)
}