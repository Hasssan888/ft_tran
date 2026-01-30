import { Controller, Get, Param } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Controller('matches')
export class MatchesController {
    constructor (private readonly prisma: PrismaService) {}

    // GET /matches
    @Get()
    getAllMatches() {
        return this.prisma.match.findMany({
            include : {
                player1: { select: { id: true, username: true, rating: true } },
                player2: { select: { id: true, username: true, rating: true } },
                winner: { select: { id: true, username: true } }
            },
            orderBy: { id: 'desc' },
            take : 50,
        });
    }

    // GET /matches/leaderboard
    @Get('/leaderboard')
    getLeaderboard() {
        this.prisma.user.findMany({
            where : {  }
        });
    }
}