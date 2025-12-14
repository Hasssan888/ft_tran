"use client"

import { Card } from "@/components/ui/card"

export default function ProfileInfo() {
    return (
        <Card className="p-6 border border-border/50 bg-card/50 backdrop-blur">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Stat Item */}
            {[
            { label: "Member Since", value: "Jan 2024" },
            { label: "Location", value: "San Francisco, CA" },
            { label: "Timezone", value: "PST (UTC-8)" },
            { label: "Preferred Hand", value: "Right-Handed" },
            ].map((item) => (
            <div key={item.label} className="text-center">
                <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                <p className="text-foreground font-semibold">{item.value}</p>
            </div>
            ))}
        </div>
        </Card>
    )
}
