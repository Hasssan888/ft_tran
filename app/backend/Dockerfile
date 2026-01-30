# Stage 1: Build
FROM node:20-alpine AS builder

# Install missing libraries needed for Prisma on Alpine
RUN apk add --no-cache openssl libc6-compat


WORKDIR /app

# Install ALL dependencies (including devDependencies for build)
COPY package*.json ./
COPY prisma ./prisma
RUN npm ci
RUN npx prisma generate

# Build the app
COPY . .
RUN npm run build

# Stage 2: Production runtime (smaller image)
FROM node:20-alpine AS runner

# Install missing libraries needed for Prisma on Alpine
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

ENV NODE_ENV=production

# Install ONLY production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy Prisma schema AND migrations folder
COPY --from=builder /app/prisma ./prisma/
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma/client ./node_modules/@prisma/client

# Copy compiled JavaScript (no TypeScript source)
COPY --from=builder /app/dist ./dist

EXPOSE 4000
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]