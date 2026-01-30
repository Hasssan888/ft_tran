# Variables
COMPOSE = docker compose
DEV_FILES = -f docker-compose.yml -f docker-compose.override.yml
PROD_FILES = -f docker-compose.yml
DB_FILES = -f docker-compose.db.yml

# Colors
GREEN = \033[1;32m
RESET = \033[0m

all: dev

# Development mode (Hot reload + Source mounts)
dev:
	@echo "$(GREEN)Starting Development Environment...$(RESET)"
	$(COMPOSE) $(DEV_FILES) up

# Development mode + Exposed DB Port (For Prisma Studio/TablePlus)
dev-db:
	@echo "$(GREEN)Starting Dev Env with Exposed DB...$(RESET)"
	$(COMPOSE) $(DEV_FILES) $(DB_FILES) up

# Production mode (Built images, optimized)
prod:
	@echo "$(GREEN)Starting Production Environment...$(RESET)"
	$(COMPOSE) $(PROD_FILES) up --build

# Build images (Rebuild everything)
build:
	@echo "$(GREEN)Rebuilding Images...$(RESET)"
	$(COMPOSE) $(DEV_FILES) build

# Stop containers
down:
	@echo "$(GREEN)Stopping Containers...$(RESET)"
	$(COMPOSE) down

# Clean everything (images, volumes, orphans)
clean: down
	@echo "$(GREEN)Cleaning System...$(RESET)"
	docker system prune -f
	docker volume prune -f

# Run Prisma Studio (Requires dev-db running)
studio:
	@echo "$(GREEN)Starting Prisma Studio (Ensure dev-db is running!)...$(RESET)"
	cd backend && npx prisma studio

# Logs
logs:
	$(COMPOSE) logs -f

.PHONY: all dev dev-db prod build down clean studio logs