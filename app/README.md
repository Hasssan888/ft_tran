# ft_transcendence

> A real-time multiplayer Pong game built with modern web technologies

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-11-red)](https://nestjs.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5-2D3748)](https://www.prisma.io/)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Status](#project-status)
- [Documentation](#documentation)
- [Team](#team)

---

## 🎯 Overview

**ft_transcendence** is a full-stack web application that brings the classic Pong game to the modern web. Players can compete in real-time matches, track their statistics, and climb the leaderboard.

### Current Architecture

```
┌─────────────┐         WebSocket/HTTP        ┌─────────────┐
│   Next.js   │ ◄──────────────────────────► │   NestJS    │
│  Frontend   │         Port 3000/4000        │   Backend   │
│  (Port 3000)│                               │  (Port 4000)│
└─────────────┘                               └──────┬──────┘
                                                     │
                                                     │ Prisma ORM
                                                     ▼
                                              ┌─────────────┐
                                              │ PostgreSQL  │
                                              │  Database   │
                                              │ (Port 5432) │
                                              └─────────────┘
```

---

## ✨ Features

### ✅ Implemented
- ⚡ **Real-time Multiplayer** - Play Pong against other players using WebSockets
- 🎮 **Smooth Gameplay** - 60 FPS game loop with client-side rendering
- 🏗️ **Modern Architecture** - NestJS backend with modular design
- 🗄️ **Database Integration** - PostgreSQL with Prisma ORM
- 🎨 **Custom UI** - Responsive design with vanilla CSS

### 🚧 In Progress
- 👤 User authentication and profiles
- 🔐 OAuth 2.0 integration (42 intra)
- 💬 Real-time chat system
- 👥 Friends and social features

### 📋 Planned
- 📊 Match history and statistics
- 🏆 Leaderboard and ranking system
- 👁️ Spectator mode
- 🎯 Achievements system

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16 (React 19)
- **Language:** TypeScript
- **Styling:** Vanilla CSS
- **Real-time:** Socket.io Client

### Backend
- **Framework:** NestJS 11
- **Language:** TypeScript
- **Real-time:** Socket.io Server
- **ORM:** Prisma 5

### Database
- **Database:** PostgreSQL 15
- **Container:** Docker

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SouleEater99/ft_transcendence.git
   cd ft_transcendence
   ```

2. **Start the database**
   ```bash
   cd docker
   docker-compose up -d
   ```

3. **Setup Backend**
   ```bash
   cd backend
   npm install
   npx prisma migrate dev    # Apply database migrations
   npm run start:dev         # Start backend on port 4000
   ```

4. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev              # Start frontend on port 3000
   ```

5. **Play the game**
   - Open http://localhost:3000/game in **two browser tabs**
   - Both players will be matched automatically
   - Use Arrow keys to control your paddle

---

## 📊 Project Status

**Current Progress:** 9/14 Required Points (64%)

| Module | Status | Points |
|--------|--------|--------|
| Frontend Framework (React) | ✅ Complete | 1 |
| Backend Framework (NestJS) | ✅ Complete | 1 |
| WebSocket Real-time | ✅ Complete | 2 |
| ORM (Prisma) | ✅ Complete | 1 |
| Complete Game | ✅ Complete | 2 |
| Remote Multiplayer | ✅ Complete | 2 |
| User Management | ⏳ TODO | 2 |
| OAuth 2.0 | ⏳ TODO | 1 |
| User Interactions | ⏳ TODO | 2 |

See [PROGRESS.md](PROGRESS.md) for detailed breakdown.

---

## 📚 Documentation

- **[Project Documentation](PROJECT_DOCUMENTATION.md)** - Complete technical documentation
  - Architecture diagrams
  - Database schema
  - API documentation
  - Setup instructions
  
- **[Progress Tracker](PROGRESS.md)** - Module completion status
  - Points breakdown
  - Feature checklist
  - Roadmap

- **[Git Workflow](GIT_WORKFLOW.md)** - Collaboration guidelines
  - Branching strategy
  - PR process
  - Code review

---

## 📁 Project Structure

```
ft_transcendence/
├── backend/              # NestJS Backend
│   ├── src/
│   │   ├── game/        # Game module (WebSocket, physics)
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
├── frontend/            # Next.js Frontend
│   ├── app/
│   │   └── game/       # Game page
│   ├── components/
│   │   └── game/       # Pong canvas component
│   └── package.json
│
├── docker/
│   └── docker-compose.yml
│
└── docs/               # Documentation
```

---

## 🎮 How to Play

1. Navigate to http://localhost:3000/game
2. Wait for another player to join
3. Watch the countdown (3...2...1...GO!)
4. Use **Arrow Up** and **Arrow Down** to move your paddle
5. First to 5 points wins!

---

## 🤝 Team

- **AbdelAli** ([@SouleEater99](https://github.com/SouleEater99))

---

## 📝 License

This project is part of the 42 School curriculum.

---

## 🔗 Links

- [NestJS Documentation](https://docs.nestjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Socket.io Documentation](https://socket.io/docs/)