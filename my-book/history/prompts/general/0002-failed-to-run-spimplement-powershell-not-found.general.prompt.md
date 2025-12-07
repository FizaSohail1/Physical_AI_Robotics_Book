---
id: 0002
title: Failed to run sp.implement - PowerShell not found
stage: general
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: general
branch: 001-book-writing-ai-robotics
user: user
command: /sp.implement
labels: ["prerequisites", "error", "implement"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/scripts/powershell/check-prerequisites.ps1
tests:
---

## Prompt

$ARGUMENTS

## Response snapshot

The `check-prerequisites.ps1` script failed because `pwsh` (PowerShell) was not found, preventing implementation.

## Outcome

- ✅ Impact: Failure to proceed with implementation due to missing prerequisite.
- 🧪 Tests: No tests run.
- 📁 Files: No files created or modified except PHR.
- 🔁 Next prompts: User needs to install PowerShell or adjust environment.
- 🧠 Reflection: PHR creation failed using bash script, fell back to agent-native write.

## Evaluation notes (flywheel)

- Failure modes observed: Missing `pwsh` executable, `create-phr.sh` script not found.
- Graders run and results (PASS/FAIL): FAIL
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Advise user to install PowerShell.
