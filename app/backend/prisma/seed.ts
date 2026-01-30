import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create test users
  const testUsers = [
    {
      username: "alice",
      email: "alice@test.com",
      password: await bcrypt.hash("password123", 12),
      rating: 1200,
      wins: 10,
      losses: 5,
    },
    {
      username: "bob",
      email: "bob@test.com",
      password: await bcrypt.hash("password123", 12),
      rating: 1100,
      wins: 8,
      losses: 7,
    },
  ];

  for (const userData of testUsers) {
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: {
        ...userData,
        profile: {
          create: {
            displayName: userData.username,
            avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.username}`,
            status: "offline",
          },
        },
      },
    });
    console.log(`✅ Created user: ${user.username}`);
  }

  // Create test matches
  const alice = await prisma.user.findUnique({ where: { username: "alice" } });
  const bob = await prisma.user.findUnique({ where: { username: "bob" } });

  if (alice && bob) {
    await prisma.match.create({
      data: {
        player1Id: alice.id,
        player2Id: bob.id,
        scoreLeft: 11,
        scoreRight: 7,
        winnerId: alice.id,
      },
    });
    console.log("✅ Created test match");
  }

  console.log("🎉 Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });