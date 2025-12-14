"use client"

import { useEffect, useRef } from "react"

interface PongCanvasProps {
isPaused: boolean
}

export default function PongCanvas({ isPaused }: PongCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Resize canvas
        const resizeCanvas = () => {
            const rect = canvas.parentElement?.getBoundingClientRect()
            if (rect) {
                canvas.width = rect.width
                canvas.height = Math.min(rect.width * 0.6, window.innerHeight - 200)
            }
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Game variables
        const paddleHeight = 80
        const paddleWidth = 10
        const ballSize = 8
        let playerY = canvas.height / 2 - paddleHeight / 2
        let opponentY = canvas.height / 2 - paddleHeight / 2
        let ballX = canvas.width / 2
        let ballY = canvas.height / 2
        let ballSpeedX = 3
        let ballSpeedY = 3
        let mouseY = playerY

        // Keyboard handling
        const keys: { [key: string]: boolean } = {}
            const handleKeyDown = (e: KeyboardEvent) => {
            keys[e.key] = true
        }
        const handleKeyUp = (e: KeyboardEvent) => {
            keys[e.key] = false
        }
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseY = e.clientY - rect.top - paddleHeight / 2
        }

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)
        canvas.addEventListener("mousemove", handleMouseMove)

        const gameLoop = () => {
        if (isPaused) {
            requestAnimationFrame(gameLoop)
            return
        }

        // Clear canvas with semi-transparent background for trail effect
        ctx.fillStyle = "rgba(13, 15, 24, 0.1)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw net
        ctx.strokeStyle = "rgba(168, 85, 247, 0.2)"
        ctx.setLineDash([5, 15])
        ctx.beginPath()
        ctx.moveTo(canvas.width / 2, 0)
        ctx.lineTo(canvas.width / 2, canvas.height)
        ctx.stroke()
        ctx.setLineDash([])

        // Update player paddle
        if (keys["w"] || keys["W"]) playerY -= 6
        if (keys["s"] || keys["S"]) playerY += 6
        playerY = Math.max(0, Math.min(canvas.height - paddleHeight, playerY))
        // Also use mouse position
        playerY = Math.max(0, Math.min(canvas.height - paddleHeight, mouseY))

        // AI opponent movement
        const opponentCenter = opponentY + paddleHeight / 2
        if (opponentCenter < ballY - 35) opponentY += 4
        if (opponentCenter > ballY + 35) opponentY -= 4
        opponentY = Math.max(0, Math.min(canvas.height - paddleHeight, opponentY))

        // Update ball
        ballX += ballSpeedX
        ballY += ballSpeedY

        // Ball collision with top and bottom
        if (ballY - ballSize < 0 || ballY + ballSize > canvas.height) {
            ballSpeedY *= -1
            ballY = Math.max(ballSize, Math.min(canvas.height - ballSize, ballY))
        }

        // Ball collision with paddles
        if (ballSpeedX < 0 && ballX - ballSize < paddleWidth && ballY > playerY && ballY < playerY + paddleHeight) {
            ballSpeedX *= -1.05
            const deltaY = ballY - (playerY + paddleHeight / 2)
            ballSpeedY = deltaY * 0.1
        }

        if (
            ballSpeedX > 0 &&
            ballX + ballSize > canvas.width - paddleWidth &&
            ballY > opponentY &&
            ballY < opponentY + paddleHeight
        ) {
            ballSpeedX *= -1.05
            const deltaY = ballY - (opponentY + paddleHeight / 2)
            ballSpeedY = deltaY * 0.1
        }

        // Reset ball if out of bounds
        if (ballX < 0 || ballX > canvas.width) {
            ballX = canvas.width / 2
            ballY = canvas.height / 2
            ballSpeedX = 3
            ballSpeedY = 3
        }

        // Draw player paddle
        const playerGradient = ctx.createLinearGradient(0, playerY, paddleWidth, playerY + paddleHeight)
        playerGradient.addColorStop(0, "rgba(168, 85, 247, 0.8)")
        playerGradient.addColorStop(1, "rgba(59, 130, 246, 0.8)")
        ctx.fillStyle = playerGradient
        ctx.shadowColor = "rgba(168, 85, 247, 0.6)"
        ctx.shadowBlur = 15
        ctx.fillRect(10, playerY, paddleWidth, paddleHeight)
        ctx.shadowColor = "transparent"

        // Draw opponent paddle
        const opponentGradient = ctx.createLinearGradient(
            canvas.width - paddleWidth,
            opponentY,
            canvas.width,
            opponentY + paddleHeight,
        )
        opponentGradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
        opponentGradient.addColorStop(1, "rgba(34, 197, 94, 0.8)")
        ctx.fillStyle = opponentGradient
        ctx.shadowColor = "rgba(34, 197, 94, 0.6)"
        ctx.shadowBlur = 15
        ctx.fillRect(canvas.width - paddleWidth - 10, opponentY, paddleWidth, paddleHeight)
        ctx.shadowColor = "transparent"

        // Draw ball with glow
        const ballGradient = ctx.createRadialGradient(ballX, ballY, 0, ballX, ballY, ballSize)
        ballGradient.addColorStop(0, "rgba(34, 197, 94, 1)")
        ballGradient.addColorStop(1, "rgba(34, 197, 94, 0.3)")
        ctx.fillStyle = ballGradient
        ctx.shadowColor = "rgba(34, 197, 94, 0.8)"
        ctx.shadowBlur = 20
        ctx.beginPath()
        ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowColor = "transparent"

        requestAnimationFrame(gameLoop)
        }

        gameLoop()

        return () => {
        window.removeEventListener("resize", resizeCanvas)
        window.removeEventListener("keydown", handleKeyDown)
        window.removeEventListener("keyup", handleKeyUp)
        canvas.removeEventListener("mousemove", handleMouseMove)
        }
    }, [isPaused])

    return (
        <div className="relative">
        <canvas
            ref={canvasRef}
            className="w-full rounded-2xl border-2 border-primary/50 shadow-xl shadow-primary/20 bg-background"
        />
        <div className="absolute top-4 left-4 text-sm font-bold text-primary">You</div>
        <div className="absolute top-4 right-4 text-sm font-bold text-secondary">Opponent</div>
        </div>
    )
}
