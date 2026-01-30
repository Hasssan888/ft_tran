# ft_transcendence - Git Workflow & Branching Strategy

This document outlines the Git workflow, branch strategy, and CI/CD approach for our ft_transcendence project. Following this ensures smooth collaboration, minimal conflicts, and a consistent development process.

---

## 1. Repository Setup

- **Default branch:** `main`
  - Protected branch:  
    - Require pull requests (PRs) for all changes.
    - Require passing checks (CI, lint, tests) before merge.
    - Require code review from at least 1 peer before merge.
    - Automatically delete head branches after merge.
- **Environment files:** Store sensitive data in `.env` and **never commit it**.
- **Docker & Makefile:** Setup the base project skeleton for local development.

---

## 2. Branching Strategy

We follow **Git Flow / feature-based branching**.  

### Main Branches
- `main`: Stable production-ready code.
- `develop` (optional): Integration branch for features before merging to `main`.

### Feature Branches
- Naming convention: `feature/<feature-name>`
- Purpose: Implement a **specific feature or module**.
- Examples (color-coded by type):
  - **Backend / API:** `feature/backend-framework`
  - **Frontend:** `feature/frontend-tailwind`
  - **Game Logic:** `feature/game-remote-players` 
  - **DevOps / CI:** `feature/docker-ci`
  - **Security / Auth:** `feature/auth-2fa-jwt`
  - **Blockchain:** `feature/blockchain-score`

### Hotfix / Bugfix Branches
- Naming convention: `fix/<bug-description>`
- Purpose: Quick fixes or urgent patches.
- Workflow:
  1. Branch off `dev`.
  2. Implement fix.
  3. PR to `dev`.
  4. Merge and delete branch.

---

## 3. CI/CD & Checks

- **CI (Continuous Integration):** Automatically run tests and lint on PRs.
- **Linting / Formatting:** Use ESLint + Prettier to enforce code style.
- **Tests:** All new features should include unit or integration tests.
- **Build checks:** PR cannot merge if tests or lint fail.

---

## 4. Workflow Summary

### Visual Git Workflow
```
main (stable)
│
├─ develop (integration)
│  ├─ feature/backend-framework
│  ├─ feature/frontend-tailwind
│  ├─ feature/game-remote-players
│  ├─ feature/docker-ci
│  └─ feature/auth-2fa-jwt
│
└─ hotfix/fix-typo
```

### Workflow Steps
1. Setup Docker skeleton and Makefile first.
2. Create feature branches for each module or major task.
3. Push feature branch and open a PR.
4. Run CI, lint, and tests automatically.
5. Peer review the PR.
6. Merge into `main` (or `develop`) if checks pass.
7. Delete the feature branch after merge.

---

## 5. Best Practices

- Always write descriptive commit messages.
- Rebase regularly to avoid conflicts.
- Use small, focused PRs for faster review.
- Document any module dependencies or changes in the project wiki or README.
- Never commit sensitive files or credentials.

---

## 6. Commit Message Format

Use conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(game): implement real-time multiplayer
fix(auth): resolve JWT token expiration issue
docs(readme): update setup instructions
```

---

## 7. Pull Request Template

When creating a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
```

---

## 8. Code Review Guidelines

### For Authors
- Keep PRs small and focused
- Provide context in PR description
- Respond to feedback promptly
- Update documentation

### For Reviewers
- Review within 24 hours
- Be constructive and respectful
- Test the changes locally if needed
- Approve only when confident

---

**Last Updated:** December 31, 2025
