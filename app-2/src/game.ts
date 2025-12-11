// game.ts
(() => {
    const gameCanvas = document.getElementById("gameCanvas") as HTMLCanvasElement | null;

    if (!gameCanvas) {
        throw new Error("Canvas element #gameCanvas not found in DOM");
    }

    const container = gameCanvas.parentElement as HTMLElement;


    const ctx = gameCanvas.getContext('2d');
    if (!ctx) return;

    // Game state
    let isPaused = true;
    let isSoundOn = true;
    let playerScore = 0;
    let opponentScore = 0;
    let gameStarted = false;

    // Canvas setup
    function resizeCanvas(): void {
        const container = gameCanvas.parentElement;
        if (container && gameCanvas) {
            gameCanvas.width = container.clientWidth;
            gameCanvas.height = Math.min(container.clientWidth * 0.6, window.innerHeight - 200);
        }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Game variables
    const paddleHeight = 80;
    const paddleWidth = 10;
    const ballSize = 8;
    let playerY = gameCanvas.height / 2 - paddleHeight / 2;
    let opponentY = gameCanvas.height / 2 - paddleHeight / 2;
    let ballX = gameCanvas.width / 2;
    let ballY = gameCanvas.height / 2;
    let ballSpeedX = 3;
    let ballSpeedY = 3;
    let mouseY = playerY;

    // Input handling with proper typing
    const keys: { [key: string]: boolean } = {};
    
    const handleKeyDown = (e: KeyboardEvent): void => {
        keys[e.key] = true;
    };
    
    const handleKeyUp = (e: KeyboardEvent): void => {
        keys[e.key] = false;
    };
    
    const handleMouseMove = (e: MouseEvent): void => {
        const rect = gameCanvas.getBoundingClientRect();
        mouseY = e.clientY - rect.top - paddleHeight / 2;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    gameCanvas.addEventListener('mousemove', handleMouseMove);

    // Game loop
    function gameLoop(): void {
        if (!ctx || !gameCanvas) return;

        if (!isPaused) {
            if (!gameStarted) {
                gameStarted = true;
            }

            // Clear with trail effect
            ctx.fillStyle = 'rgba(10, 15, 20, 0.1)';
            ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

            // Draw net
            ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
            ctx.setLineDash([5, 15]);
            ctx.beginPath();
            ctx.moveTo(gameCanvas.width / 2, 0);
            ctx.lineTo(gameCanvas.width / 2, gameCanvas.height);
            ctx.stroke();
            ctx.setLineDash([]);

            // Update player paddle
            if (keys['w'] || keys['W']) playerY -= 6;
            if (keys['s'] || keys['S']) playerY += 6;
            playerY = Math.max(0, Math.min(gameCanvas.height - paddleHeight, mouseY));

            // AI opponent
            const opponentCenter = opponentY + paddleHeight / 2;
            if (opponentCenter < ballY - 35) opponentY += 4;
            if (opponentCenter > ballY + 35) opponentY -= 4;
            opponentY = Math.max(0, Math.min(gameCanvas.height - paddleHeight, opponentY));

            // Update ball
            ballX += ballSpeedX;
            ballY += ballSpeedY;

            // Ball collision with walls
            if (ballY - ballSize < 0 || ballY + ballSize > gameCanvas.height) {
                ballSpeedY *= -1;
                ballY = Math.max(ballSize, Math.min(gameCanvas.height - ballSize, ballY));
            }

            // Ball collision with paddles
            if (ballSpeedX < 0 && ballX - ballSize < paddleWidth + 10 && ballY > playerY && ballY < playerY + paddleHeight) {
                ballSpeedX *= -1.05;
                const deltaY = ballY - (playerY + paddleHeight / 2);
                ballSpeedY = deltaY * 0.1;
            }

            if (ballSpeedX > 0 && ballX + ballSize > gameCanvas.width - paddleWidth - 10 && ballY > opponentY && ballY < opponentY + paddleHeight) {
                ballSpeedX *= -1.05;
                const deltaY = ballY - (opponentY + paddleHeight / 2);
                ballSpeedY = deltaY * 0.1;
            }

            // Score tracking
            if (ballX < 0) {
                opponentScore++;
                const opponentScoreEl = document.getElementById('opponentScore');
                if (opponentScoreEl) opponentScoreEl.textContent = opponentScore.toString();
                resetBall();
            }
            if (ballX > gameCanvas.width) {
                playerScore++;
                const playerScoreEl = document.getElementById('playerScore');
                if (playerScoreEl) playerScoreEl.textContent = playerScore.toString();
                resetBall();
            }

            // Draw player paddle
            const playerGradient = ctx.createLinearGradient(10, playerY, 10 + paddleWidth, playerY + paddleHeight);
            playerGradient.addColorStop(0, 'rgba(168, 85, 247, 0.8)');
            playerGradient.addColorStop(1, 'rgba(59, 130, 246, 0.8)');
            ctx.fillStyle = playerGradient;
            ctx.shadowColor = 'rgba(168, 85, 247, 0.6)';
            ctx.shadowBlur = 15;
            ctx.fillRect(10, playerY, paddleWidth, paddleHeight);

            // Draw opponent paddle
            const opponentGradient = ctx.createLinearGradient(gameCanvas.width - paddleWidth - 10, opponentY, gameCanvas.width - 10, opponentY + paddleHeight);
            opponentGradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
            opponentGradient.addColorStop(1, 'rgba(34, 197, 94, 0.8)');
            ctx.fillStyle = opponentGradient;
            ctx.shadowColor = 'rgba(34, 197, 94, 0.6)';
            ctx.shadowBlur = 15;
            ctx.fillRect(gameCanvas.width - paddleWidth - 10, opponentY, paddleWidth, paddleHeight);

            // Draw ball
            const ballGradient = ctx.createRadialGradient(ballX, ballY, 0, ballX, ballY, ballSize);
            ballGradient.addColorStop(0, 'rgba(34, 197, 94, 1)');
            ballGradient.addColorStop(1, 'rgba(34, 197, 94, 0.3)');
            ctx.fillStyle = ballGradient;
            ctx.shadowColor = 'rgba(34, 197, 94, 0.8)';
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowColor = 'transparent';
        } else {
            // Draw static game when paused
            if (!gameStarted) {
                ctx.fillStyle = 'rgba(10, 15, 20, 1)';
                ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

                // Draw net
                ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
                ctx.setLineDash([5, 15]);
                ctx.beginPath();
                ctx.moveTo(gameCanvas.width / 2, 0);
                ctx.lineTo(gameCanvas.width / 2, gameCanvas.height);
                ctx.stroke();
                ctx.setLineDash([]);

                // Draw "Press Play to Start" text
                ctx.fillStyle = 'rgba(168, 85, 247, 0.8)';
                ctx.font = 'bold 24px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Press Play to Start', gameCanvas.width / 2, gameCanvas.height / 2);
                
                ctx.fillStyle = 'rgba(168, 85, 247, 0.5)';
                ctx.font = '16px sans-serif';
                ctx.fillText('Use mouse or W/S keys to control your paddle', gameCanvas.width / 2, gameCanvas.height / 2 + 40);

                // Draw paddles
                const playerGradient = ctx.createLinearGradient(10, playerY, 10 + paddleWidth, playerY + paddleHeight);
                playerGradient.addColorStop(0, 'rgba(168, 85, 247, 0.8)');
                playerGradient.addColorStop(1, 'rgba(59, 130, 246, 0.8)');
                ctx.fillStyle = playerGradient;
                ctx.shadowColor = 'rgba(168, 85, 247, 0.6)';
                ctx.shadowBlur = 15;
                ctx.fillRect(10, playerY, paddleWidth, paddleHeight);

                const opponentGradient = ctx.createLinearGradient(gameCanvas.width - paddleWidth - 10, opponentY, gameCanvas.width - 10, opponentY + paddleHeight);
                opponentGradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
                opponentGradient.addColorStop(1, 'rgba(34, 197, 94, 0.8)');
                ctx.fillStyle = opponentGradient;
                ctx.shadowColor = 'rgba(34, 197, 94, 0.6)';
                ctx.shadowBlur = 15;
                ctx.fillRect(gameCanvas.width - paddleWidth - 10, opponentY, paddleWidth, paddleHeight);

                // Draw ball
                const ballGradient = ctx.createRadialGradient(ballX, ballY, 0, ballX, ballY, ballSize);
                ballGradient.addColorStop(0, 'rgba(34, 197, 94, 1)');
                ballGradient.addColorStop(1, 'rgba(34, 197, 94, 0.3)');
                ctx.fillStyle = ballGradient;
                ctx.shadowColor = 'rgba(34, 197, 94, 0.8)';
                ctx.shadowBlur = 20;
                ctx.beginPath();
                ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowColor = 'transparent';
            }
        }

        requestAnimationFrame(gameLoop);
    }

    function resetBall(): void {
        if (!gameCanvas) return;
        ballX = gameCanvas.width / 2;
        ballY = gameCanvas.height / 2;
        ballSpeedX = 3 * (Math.random() > 0.5 ? 1 : -1);
        ballSpeedY = 3 * (Math.random() > 0.5 ? 1 : -1);
    }

    gameLoop();

    // UI Controls
    const pauseBtn = document.getElementById('pauseBtn');
    const pauseIcon = document.getElementById('pauseIcon');
    const pauseText = document.getElementById('pauseText');
    const soundBtn = document.getElementById('soundBtn');
    const soundIcon = document.getElementById('soundIcon');
    const soundText = document.getElementById('soundText');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const exitBtn = document.getElementById('exitBtn');

    pauseBtn?.addEventListener('click', () => {
        isPaused = !isPaused;
        if (isPaused) {
            if (pauseIcon) {
                pauseIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
            }
            if (pauseText) {
                pauseText.textContent = gameStarted ? 'Resume' : 'Play';
            }
            pauseBtn.classList.remove('bg-primary');
            pauseBtn.classList.add('bg-accent');
        } else {
            if (pauseIcon) {
                pauseIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
            }
            if (pauseText) {
                pauseText.textContent = 'Pause';
            }
            pauseBtn.classList.remove('bg-accent');
            pauseBtn.classList.add('bg-primary');
        }
    });

    soundBtn?.addEventListener('click', () => {
        isSoundOn = !isSoundOn;
        if (isSoundOn) {
            if (soundIcon) {
                soundIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>';
            }
            if (soundText) {
                soundText.textContent = 'Sound On';
            }
        } else {
            if (soundIcon) {
                soundIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>';
            }
            if (soundText) {
                soundText.textContent = 'Sound Off';
            }
        }
    });

    fullscreenBtn?.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    exitBtn?.addEventListener('click', () => {
        if (confirm('Are you sure you want to exit the match?')) {
            window.location.href = '/';
        }
    });

    // Populate recent matches
    const matches = [
        { id: 1, opponent: 'AlexPlayer', result: 'Won', score: '21-15', date: '2 hours ago', rank: 'Pro', initial: 'A' },
        { id: 2, opponent: 'JordanPro', result: 'Lost', score: '18-21', date: '4 hours ago', rank: 'Elite', initial: 'J' },
        { id: 3, opponent: 'CaseyMaster', result: 'Won', score: '21-12', date: '1 day ago', rank: 'Advanced', initial: 'C' },
        { id: 4, opponent: 'MorganKing', result: 'Won', score: '21-16', date: '2 days ago', rank: 'Pro', initial: 'M' },
        { id: 5, opponent: 'TaylorChamp', result: 'Lost', score: '15-21', date: '3 days ago', rank: 'Master', initial: 'T' }
    ];

    const matchesTable = document.getElementById('matchesTable');
    matches.forEach(match => {
        const row = document.createElement('tr');
        row.className = 'border-b border-gray-800 hover:bg-primary/5 transition-colors';
        row.innerHTML = `
            <td class="py-3 px-4">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">
                        ${match.initial}
                    </div>
                    <div>
                        <p class="font-semibold">${match.opponent}</p>
                        <p class="text-xs text-gray-400">${match.rank}</p>
                    </div>
                </div>
            </td>
            <td class="py-3 px-4 text-center">
                <span class="px-3 py-1 rounded-full text-xs font-semibold ${
                    match.result === 'Won'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }">${match.result}</span>
            </td>
            <td class="py-3 px-4 text-center font-semibold">${match.score}</td>
            <td class="py-3 px-4 text-right text-gray-400">${match.date}</td>
        `;
        matchesTable?.appendChild(row);
    });

    // Populate friends list
    const friends = [
        { name: 'Alex', online: true },
        { name: 'Jordan', online: true },
        { name: 'Casey', online: true },
        { name: 'Morgan', online: true }
    ];

    const friendsList = document.getElementById('friendsList');
    friends.forEach(friend => {
        const friendDiv = document.createElement('div');
        friendDiv.className = 'flex items-center justify-between p-2 rounded-lg bg-[#1a1a1a] hover:bg-cardHover transition-colors';
        friendDiv.innerHTML = `
            <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full ${friend.online ? 'bg-green-500' : 'bg-gray-500'}"></div>
                <span class="text-sm font-medium">${friend.name}</span>
            </div>
            <button class="px-2 py-1 text-xs bg-transparent border border-gray-700 hover:border-primary hover:bg-primary/10 rounded transition-all">
                Invite
            </button>
        `;
        friendsList?.appendChild(friendDiv);
    });

    // Chat functionality
    const chatInput = document.getElementById('chatInput') as HTMLInputElement;
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');

    function sendMessage(): void {
        if (!chatInput || !chatMessages) return;
        
        const message = chatInput.value.trim();
        if (message) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'text-sm bg-primary/10 p-3 rounded-lg border border-primary/20';
            messageDiv.innerHTML = `
                <p class="font-semibold text-primary mb-1">You</p>
                <p>${message}</p>
            `;
            chatMessages.appendChild(messageDiv);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Simulate opponent response after 2 seconds
            setTimeout(() => {
                if (!chatMessages) return;
                
                const responses = [
                    'Nice shot!',
                    'Good game!',
                    'Close one!',
                    'Well played!',
                    'Thanks!'
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                const responseDiv = document.createElement('div');
                responseDiv.className = 'text-sm bg-secondary/10 p-3 rounded-lg border border-secondary/20';
                responseDiv.innerHTML = `
                    <p class="font-semibold text-secondary mb-1">Opponent</p>
                    <p>${randomResponse}</p>
                `;
                chatMessages.appendChild(responseDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 2000);
        }
    }

    sendBtn?.addEventListener('click', sendMessage);
    chatInput?.addEventListener('keypress', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Update timer
    let seconds = 0;
    setInterval(() => {
        if (!isPaused && gameStarted) {
            seconds++;
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            const matchTime = document.getElementById('matchTime');
            if (matchTime) {
                matchTime.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
            }
        }
    }, 1000);
})();