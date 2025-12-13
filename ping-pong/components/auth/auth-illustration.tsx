"use client"

import { useEffect, useRef } from "react"

export default function AuthIllustration() {
const canvasRef = useRef<HTMLCanvasElement>(null)

useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Animation variables
    let animationFrameId: number
    let time = 0

    const animate = () => {
    time += 0.005

    // Clear canvas with dark background
    ctx.fillStyle = "rgba(13, 15, 24, 0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw animated gradient waves
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
    gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.1)")
    gradient.addColorStop(1, "rgba(59, 130, 246, 0.1)")

    // Draw wave pattern
    for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = `rgba(${59 + i * 20}, ${130 - i * 10}, ${246 - i * 20}, ${0.2 - i * 0.03})`
        ctx.lineWidth = 2
        ctx.beginPath()

        for (let x = 0; x < canvas.width; x += 10) {
        const y = canvas.height / 2 + Math.sin((x + time * 50) * 0.01 + i) * 40 + i * 20
        if (x === 0) {
            ctx.moveTo(x, y)
        } else {
            ctx.lineTo(x, y)
        }
        }
        ctx.stroke()
    }

    // Draw glowing circles (ping pong ball concept)
    const ballX = canvas.width / 2 + Math.cos(time) * 80
    const ballY = canvas.height / 2 + Math.sin(time * 0.7) * 80

    // Glow effect
    const glowGradient = ctx.createRadialGradient(ballX, ballY, 0, ballX, ballY, 60)
    glowGradient.addColorStop(0, "rgba(59, 130, 246, 0.6)")
    glowGradient.addColorStop(1, "rgba(139, 92, 246, 0.0)")

    ctx.fillStyle = glowGradient
    ctx.fillRect(ballX - 60, ballY - 60, 120, 120)

    // Central ball
    ctx.fillStyle = "rgba(139, 92, 246, 0.8)"
    ctx.beginPath()
    ctx.arc(ballX, ballY, 8, 0, Math.PI * 2)
    ctx.fill()

    animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrameId)
}, [])

    return (
        <div className="absolute inset-0 flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
            <div className="mb-8">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/50">
                <span className="text-3xl">🏓</span>
            </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">Play. Compete. Win.</h1>
            <p className="text-lg text-muted-foreground max-w-xs">
            Join the ultimate ping pong arena and battle players worldwide
            </p>
        </div>
        </div>
    )
}
