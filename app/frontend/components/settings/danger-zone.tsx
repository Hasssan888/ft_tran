"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { LogOut, Trash2 } from "lucide-react"

export default function DangerZone() {
    const [deleteConfirmed, setDeleteConfirmed] = useState(false)

    return (
        <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold gradient-text">Danger Zone</h2>
            <p className="text-muted-foreground mt-1">Irreversible and destructive actions</p>
        </div>

        {/* Logout */}
        <Card className="glass-effect border-destructive/20 bg-destructive/5">
            <CardHeader>
            <CardTitle className="text-destructive">Logout</CardTitle>
            <CardDescription>Sign out from your account on this device</CardDescription>
            </CardHeader>
            <CardContent>
            <Button
                variant="outline"
                className="border-destructive text-destructive hover:bg-destructive hover:text-white gap-2 bg-transparent"
            >
                <LogOut className="w-4 h-4" />
                Logout
            </Button>
            </CardContent>
        </Card>

        {/* Delete Account */}
        <Card className="glass-effect border-destructive/40 bg-destructive/10">
            <CardHeader>
            <CardTitle className="text-destructive">Delete Account</CardTitle>
            <CardDescription>Permanently delete your account and all associated data</CardDescription>
            </CardHeader>
            <CardContent>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                <Button className="bg-destructive hover:bg-destructive/90 gap-2">
                    <Trash2 className="w-4 h-4" />
                    Delete Account
                </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account and remove all your data from
                    our servers. All your statistics, achievements, and match history will be lost.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="space-y-2 py-2">
                    <p className="text-sm font-semibold">Type your username to confirm:</p>
                    <input
                    type="text"
                    placeholder="ProPlayer123"
                    onChange={(e) => setDeleteConfirmed(e.target.value === "ProPlayer123")}
                    className="w-full px-3 py-2 bg-input border border-border rounded-lg text-sm"
                    />
                </div>
                <div className="flex gap-2 justify-end">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={!deleteConfirmed} className="bg-destructive hover:bg-destructive/90">
                    Delete Account
                    </AlertDialogAction>
                </div>
                </AlertDialogContent>
            </AlertDialog>
            </CardContent>
        </Card>
        </div>
    )
}
