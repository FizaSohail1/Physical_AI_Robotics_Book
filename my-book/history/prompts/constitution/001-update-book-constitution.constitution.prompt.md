---
id: 001
title: Update Book Constitution
stage: constitution
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: /sp.constitution
labels: ["constitution", "initial-setup"]
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

## Response snapshot

The constitution for "Physical AI & Humanoid Robotics – A Modern Teaching Course" has been updated to version 1.0.1. This is a patch version bump to reflect the initial content being added and the governance being established.

**Manual Follow-up:**
- TODO(README.md): Create a README.md if it doesn't exist and link to this constitution.

**Suggested commit message:**
`docs: amend constitution to v1.0.1 (initial content and governance update)`

## Outcome

- ✅ Impact: Constitution updated with core principles and guidelines for the book project.
- 🧪 Tests: none
- 📁 Files: .specify/memory/constitution.md updated.
- 🔁 Next prompts: Continue with project setup or content creation.
- 🧠 Reflection: The constitution was successfully updated based on user input. Further actions will involve creating a README and beginning content development.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): default
- Next experiment (smallest change to try): none
