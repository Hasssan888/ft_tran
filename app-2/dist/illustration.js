"use strict";
const canvas = document.getElementById("illustrationCanvas");
if (canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx)
        return;
    let time = 0;
    const resize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    resize();
    function animate() {
        time += 0.005;
        ctx.fillStyle = "rgba(13, 15, 24, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 5; i++) {
            ctx.strokeStyle = `rgba(${59 + i * 20}, ${130 - i * 10}, ${246 - i * 20}, ${0.2 - i * 0.03})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            for (let x = 0; x < canvas.width; x += 10) {
                const y = canvas.height / 2 +
                    Math.sin((x + time * 50) * 0.01 + i) * 40 +
                    i * 20;
                if (x === 0)
                    ctx.moveTo(x, y);
                else
                    ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
        const ballX = canvas.width / 2 + Math.cos(time) * 80;
        const ballY = canvas.height / 2 + Math.sin(time * 0.7) * 80;
        ctx.beginPath();
        ctx.arc(ballX, ballY, 8, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92,246, 0.8)";
        ctx.fill();
        requestAnimationFrame(animate);
    }
    animate();
}
