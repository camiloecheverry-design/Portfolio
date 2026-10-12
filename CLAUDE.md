# CLAUDE.md: camiloecheverry.com portfolio

Static site deployed on Vercel. `.vercelignore` keeps every `*.md` file off the live site.

## Specs come from the vault (Claude's brain)

The spec files in this repo are copies. The source of truth is Camilo's
Obsidian vault: `~/Documents/Claude's brain/02 PRDs/Projects/Portfolio camiloecheverry.com/specs/`.
Camilo syncs them with `_system/prd.py` in the vault. Mapping:

| This repo | Vault |
|---|---|
| `Design System/DESIGN.md` | `specs/SKIN - Portfolio.md` |
| `HANDOFF.md` | `specs/HANDOFF - Portfolio.md` |

Rules for build sessions:

- Build from the copies here. Do not write into the vault from this repo.
- You may edit a spec when the build needs it. When you do, say so in your
  final summary and list the files, so Camilo runs `prd.py pull`.
- Never invent `REQ-` IDs. The DNA layer owns them. If the work needs a new
  requirement, write it under the spec's Assumptions as `Proposed: ...` and
  flag it.
- Before visual decisions, read `~/Documents/Claude's brain/03 Me/Design DNA/Design DNA.md`.
  When Camilo corrects a design, say so in the summary so the lesson gets
  logged in the vault.
