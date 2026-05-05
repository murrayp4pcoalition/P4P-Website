<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project runs Next.js 16 + React 19 — APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# P4P Project Rules (Quick)

- **Working directory:** `~/dev/P4P-Website` only. Never touch `~/Desktop/Claude Projects/P4P-Website` (iCloud copy corrupts git).
- **Git identity for this repo:** `murrayp4pcoalition` / `murrayp4pcoalition@gmail.com` (NOT Brett's personal). Already set in local repo config — confirm with `git config user.email`.
- **GitHub auth is pinned per-repo.** This repo uses a custom credential helper (`~/.local/bin/gh-credential-for-user murrayp4pcoalition`) so `git push` always authenticates as the coalition account, no matter which `gh` user is globally active. If push ever fails with a 403, run `gh auth status` and confirm `murrayp4pcoalition` is still in the keyring; re-login with `gh auth login` if not.
- **Auto-deploy:** push to `main` → Vercel rebuild on the coalition's Vercel team.
- **Tech stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 3.4 (NOT v4), Framer Motion, Lucide React.
- **No PAT tokens in code.** GitHub blocks commits with secrets. `GITHUB_TOKEN` lives in Vercel env vars only.
- **Power Hub CMS:** `/power-hub` — staff edit JSON content via GitHub API → auto-deploys. Do not break this contract.
- **Brand:** Black `#1C1C1C` + Orange `#F27A21`, glassmorphic cards, animated aurora background.

See `CLAUDE.md` for full context, `RESTART-PROMPT.md` for the next-session bootstrap.
