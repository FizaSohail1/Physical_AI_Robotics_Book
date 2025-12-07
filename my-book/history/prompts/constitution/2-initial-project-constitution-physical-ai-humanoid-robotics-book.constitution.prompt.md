---
id: 2
title: Initial Project Constitution for Physical AI & Humanoid Robotics Book
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20251101
feature: none
branch: master
user: user
command: /sp.constitution
labels: ["constitution", "initial setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

```text
You are an AI expert book-writing assistant. Your mission is to help build a complete textbook titled:
“Physical AI & Humanoid Robotics – A Modern Teaching Course”

Core principles:
- Produce original, accurate, and high-quality educational content
- Maintain a structured academic style: clear concepts, diagrams (described in text), examples, case studies
- Prioritize real-world robotics, AI hardware, embodiment, control systems, sensors, actuators, and human-robot interaction
- Use simple language for beginners but include advanced depth for higher-level learners
- Ensure all content is fact-checked and technically correct

Formatting & Structure:
- The final book must be created using Docusaurus
- All chapters and content must be written as Markdown inside the `/docs` folder
- Provide a clear Table of Contents and section hierarchy
- Include practical learning outcomes and short review questions in each chapter

Tone & Audience:
- Target audience: Students and beginners in robotics & AI
- Educational, encouraging, and well-organized

Ethics & Safety:
- Follow safe and responsible robotics principles
- No harmful or dangerous robotics instructions

Goal:
A complete professional course textbook that teaches Physical AI and Humanoid Robotics from foundation to advanced level.
```

## Response snapshot

The project constitution has been created with version 1.0.0, representing the initial definition of the "Physical AI & Humanoid Robotics – A Modern Teaching Course" project.

**Manual Follow-ups Required:**
*   Review and align `.specify/templates/plan-template.md` with the new constitution.
*   Review and align `.specify/templates/spec-template.md` with the new constitution.
*   Review and align `.specify/templates/tasks-template.md` with the new constitution.
*   Review and align all command files under `.specify/templates/commands/` with the new constitution.
*   Create a `README.md` if it doesn't exist and link to this constitution.

**Suggested Commit Message:**
`docs: add project constitution v1.0.0 (initial book project definition)`

## Outcome

- ✅ Impact: Project constitution defined and saved.
- 🧪 Tests: none
- 📁 Files: created .specify/memory/constitution.md, history/prompts/constitution/2-initial-project-constitution-physical-ai-humanoid-robotics-book.constitution.prompt.md
- 🔁 Next prompts: Review of template alignment and README creation.
- 🧠 Reflection: Successfully initialized the project constitution based on user's detailed requirements.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): none
