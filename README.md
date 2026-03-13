# pnpm + sequelize + sqlite3 (Windows CI MRE)

Minimal reproduction repo:

- Default dependency: `sequelize@6.x` (no sqlite driver in package.json)
- CI (Windows): installs `sqlite3` temporarily via `pnpm add --no-save sqlite3`
- Smoke test: uses `sqlite::memory:` and runs a simple query
