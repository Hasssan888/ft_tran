# ft_transcendence - Project Documentation

## 📋 Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Game Flow](#game-flow)

---

## 🎯 Overview

**ft_transcendence** is a real-time multiplayer Pong game built as a full-stack web application. Players can compete against each other in real-time matches, track their statistics, and climb the leaderboard.

### Key Features
- ⚡ Real-time multiplayer gameplay using WebSockets (Socket.io)
- 🎮 Classic Pong physics with smooth 60 FPS rendering
- 👥 User authentication and profiles
- 📊 Match history and player statistics
- 🏆 Elo-based rating system (to-do)
- 🔒 Two-factor authentication (2FA)
- 🎨 Modern, responsive UI

---

## ⚠️ Important Notes for Team

### Version Requirements
- **Prisma**: Must use version **5.x** (NOT 7.x)
  - Prisma 7 changed configuration format (uses `prisma.config.ts`)
  - Our project uses Prisma 5 for better compatibility and documentation
  - Install with: `npm install prisma@5 @prisma/client@5`

### Port Configuration
- **Frontend**: Port 3000 (Next.js default)
- **Backend**: Port 4000 (changed from 3000 to avoid conflict)
- **Database**: Port 5432 (PostgreSQL default)
- **Prisma Studio**: Port 5555

### Environment Variables
- Backend `.env` must include `DATABASE_URL`
- Docker Compose reads from `backend/.env` (not `frontend/.env`)
- Never commit `.env` files to git

### Database Setup
- PostgreSQL runs in Docker container
- Must start Docker before running migrations
- Run `npx prisma migrate dev` after pulling new schema changes

---

## 🏗️ Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │         Next.js Frontend (Port 3000)                 │  │
│  │  - React Components                                  │  │
│  │  - Socket.io Client                                  │  │
│  │  - Canvas Rendering (Pong Game)                      │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTP/WebSocket
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND SERVER                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │       NestJS Backend (Port 4000)                     │  │
│  │                                                       │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌────────────┐ │  │
│  │  │   Gateway   │  │   Service    │  │ Controller │ │  │
│  │  │  (WebSocket)│  │  (Business)  │  │   (HTTP)   │ │  │
│  │  └─────────────┘  └──────────────┘  └────────────┘ │  │
│  │                                                       │  │
│  │  Modules:                                            │  │
│  │  - GameModule    (Real-time game logic)             │  │
│  │  - AuthModule    (Authentication)                   │  │
│  │  - UsersModule   (User management)                  │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Prisma ORM
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE                               │
│  ┌──────────────────────────────────────────────────────┐  │
│  │    PostgreSQL (Port 5432 - Docker)                   │  │
│  │                                                       │  │
│  │  Tables:                                             │  │
│  │  - User    (id, username, email, stats, auth)       │  │
│  │  - Match   (id, players, scores, winner)            │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Communication Flow

1. **Client connects** → Socket.io handshake with Backend
2. **Player joins queue** → `socket.emit('joinQueue')`
3. **Matchmaking** → Backend pairs 2 players, creates room
4. **Game initialization** → Backend sends initial state to both players
5. **Countdown** → 3...2...1...GO!
6. **Game loop** → Backend runs physics at 60 FPS, broadcasts state
7. **Input handling** → Client sends keydown/keyup → Backend updates paddle
8. **Game over** → Backend saves match to database, updates player stats

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Custom design system)
- **Real-time**: Socket.io Client
- **Rendering**: HTML5 Canvas

### Backend
- **Framework**: NestJS 11
- **Language**: TypeScript
- **Real-time**: Socket.io Server
- **ORM**: Prisma 5

### Database
- **Database**: PostgreSQL 15 (Alpine)
- **Containerization**: Docker
- **Migrations**: Prisma Migrate

### DevOps
- **Container**: Docker Compose
- **Package Manager**: npm
- **Version Control**: Git

---

## 📁 Project Structure

```
ft_transcendence/
├── backend/                    # NestJS Backend
│   ├── prisma/
│   │   ├── schema.prisma      # Database schema
│   │   └── migrations/        # Migration history
│   ├── src/
│   │   ├── game/              # Game Module
│   │   │   ├── game.gateway.ts    # WebSocket handler
│   │   │   ├── game.service.ts    # Game logic & state
│   │   │   ├── game.engine.ts     # Physics engine
│   │   │   ├── game.types.ts      # Type definitions
│   │   │   └── game.module.ts     # Module config
│   │   ├── auth/              # Authentication Module (TODO)
│   │   ├── users/             # Users Module (TODO)
│   │   ├── app.module.ts      # Root module
│   │   └── main.ts            # Entry point
│   ├── .env                   # Environment variables
│   └── package.json
│
├── frontend/                   # Next.js Frontend
│   ├── app/
│   │   ├── game/
│   │   │   └── page.tsx       # Game page
│   │   └── layout.tsx
│   ├── components/
│   │   └── game/
│   │       └── pong-canvas.tsx    # Main game component
│   ├── types/
│   │   └── gameTypes.ts       # Shared types
│   └── package.json
│
├── docker/
│   └── docker-compose.yml     # Database container
│
└── README.md                  # This file
```

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- npm

### 1. Clone Repository
```bash
git clone https://github.com/YourUsername/ft_transcendence.git
cd ft_transcendence
```

### 2. Start Database
```bash
cd docker
docker-compose up -d
```

### 3. Setup Backend
```bash
cd backend
npm install
npx prisma migrate dev    # Apply database migrations
npm run start:dev         # Start backend (Port 4000)
```

### 4. Setup Frontend
```bash
cd frontend
npm install
npm run dev              # Start frontend (Port 3000)
```

### 5. Access Application
- **Frontend**: http://localhost:3000
- **Game**: http://localhost:3000/game
- **Backend API**: http://localhost:4000
- **Prisma Studio**: `npx prisma studio` (Port 5555)

---

## 🗄️ Database Schema

### User Model
```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  username  String   @unique
  avatarUrl String?
  createdAt DateTime @default(now())
  
  // Stats
  rating    Int      @default(1000)
  wins      Int      @default(0)
  losses    Int      @default(0)
  
  // Auth
  twoFactorEnabled Boolean @default(false)
  twoFactorSecret  String?
  
  // Relations
  matchesAsP1 Match[] @relation("Player1")
  matchesAsP2 Match[] @relation("Player2")
  wonMatches  Match[] @relation("Winner")
}
```

### Match Model
```prisma
model Match {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  
  scoreLeft  Int
  scoreRight Int
  
  player1    User    @relation("Player1", fields: [player1Id], references: [id])
  player1Id  Int
  player2    User    @relation("Player2", fields: [player2Id], references: [id])
  player2Id  Int
  
  winner     User?   @relation("Winner", fields: [winnerId], references: [id])
  winnerId   Int?
}
```

---

## 🎮 Game Flow

### 1. Connection Phase
```typescript
// Frontend
const socket = io("http://localhost:4000");
socket.on("connect", () => {
  socket.emit("joinQueue");
});
```

### 2. Matchmaking
- Backend maintains a waiting queue
- When 2 players available → create room
- Both players join Socket.io room

### 3. Game Initialization
```typescript
// Backend sends to both players
socket.emit('initGame', {
  ball: { x, y, radius },
  paddleLeft: { x, y, width, height },
  paddleRight: { x, y, width, height },
  playerRole: 'left' | 'right'
});
```

### 4. Countdown
```typescript
// Backend broadcasts to room
server.to(roomId).emit('countdown', { seconds: 3 });
// ... 2, 1, 0
server.to(roomId).emit('gameStart', {});
```

### 5. Game Loop (60 FPS)
```typescript
setInterval(() => {
  // 1. Process inputs
  engine.movePaddleLeft(inputs.up, inputs.down);
  
  // 2. Update physics
  const state = engine.update();
  
  // 3. Check winner
  if (engine.getWinner()) {
    endGame();
  }
  
  // 4. Broadcast state
  server.to(roomId).emit('update', { gameState: state });
}, 1000 / 60);
```

### 6. Input Handling
```typescript
// Frontend
socket.emit('keydown', { key: 'ArrowUp' });
socket.emit('keyup', { key: 'ArrowUp' });

// Backend
@SubscribeMessage('keydown')
handleKeydown(client: Socket, data: { key: string }) {
  gameService.handleInput(roomId, client.id, data.key, true);
}
```

### 7. Game Over
```typescript
// Backend
server.to(roomId).emit('gameover', {
  winner: 'left' | 'right',
  finalScore: { left: 5, right: 3 }
});

// Save to database
await prisma.match.create({
  data: {
    player1Id,
    player2Id,
    scoreLeft,
    scoreRight,
    winnerId
  }
});
```

---

## 📝 Environment Variables

### Backend (.env)
```env
DATABASE_URL="postgresql://your_user:your_password@localhost:5432/your_db?schema=public"
PORT=4000
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

---

## 🧪 Testing

```bash
# Backend tests
#to-do

# Frontend tests
# to-do
```

---

## 📚 Additional Resources

- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Socket.io Documentation](https://socket.io/docs/)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Website](https://react.dev/)

---

## 👥 Contributors

- AbdelAli (@SouleEater99)

---

## 📄 License

This project is part of the 42 School curriculum.
