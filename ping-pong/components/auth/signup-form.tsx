"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"

export default function SignupForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [agreeTerms, setAgreeTerms] = useState(false)

    return (
        <div className="w-full max-w-md">
        {/* Header */}
        <div className="absolute top-6 right-6 flex items-center gap-3">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Back to Home
            </Link>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-xl">🏓</span>
            </div>
            <span className="text-lg font-bold text-foreground">PingPong Arena</span>
        </div>

        {/* Form Card */}
        <div className="glass-effect border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
            <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Create Your Account</h2>
            <p className="text-sm text-muted-foreground">Join the arena and start competing</p>
            </div>

            {/* Form Inputs */}
            <form className="space-y-4 mb-8">
            {/* Username Input */}
            <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-foreground">
                Username
                </Label>
                <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <Input
                    id="username"
                    type="text"
                    placeholder="championplayer"
                    className="pl-10 bg-background/50 border-primary/20 focus:border-primary/50 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground rounded-lg"
                />
                </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
                </Label>
                <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 bg-background/50 border-primary/20 focus:border-primary/50 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground rounded-lg"
                />
                </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
                </Label>
                <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 bg-background/50 border-primary/20 focus:border-primary/50 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground rounded-lg"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                </div>
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                Confirm Password
                </Label>
                <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10 bg-background/50 border-primary/20 focus:border-primary/50 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground rounded-lg"
                />
                <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 pt-2">
                <Checkbox
                id="terms"
                checked={agreeTerms}
                onCheckedChange={setAgreeTerms}
                className="border-primary/30 text-primary mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer font-normal leading-tight">
                I agree to the Terms & Conditions
                </Label>
            </div>
            </form>

            {/* Primary Button */}
            <Button className="w-full h-11 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 text-white font-semibold rounded-lg transition-all mb-5">
            Sign Up
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Social Signup */}
            <div className="grid grid-cols-2 gap-3 mb-6">
            <Button
                variant="outline"
                className="border-white/10 bg-background/30 hover:bg-background/50 text-foreground rounded-lg"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="ml-2 hidden sm:inline">Google</span>
            </Button>
            <Button
                variant="outline"
                className="border-white/10 bg-background/30 hover:bg-background/50 text-foreground rounded-lg"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="ml-2 hidden sm:inline">GitHub</span>
            </Button>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                Login
            </Link>
            </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-8">© 2025 PingPong Arena — All rights reserved.</p>
        </div>
    )
}
