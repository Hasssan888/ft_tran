# Stage 1: build
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files for caching
COPY package*.json ./
RUN npm ci

# Copy Source and build
COPY . .
RUN npm run build

# Stage 2: Run
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy built artifacts from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.* ./

# Install only runtime dependecies
RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "run", "start"]
