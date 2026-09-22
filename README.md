# ClassPulse

### AI that detects when a classroom is struggling — before the exam does.

ClassPulse is an AI-powered classroom intelligence platform designed to help teachers identify learning gaps and recurring misconceptions while learning is happening, instead of waiting for an exam to reveal them.

> **Teach → Check → Detect → Intervene → Verify**

---

## Problem

In a typical classroom, teachers often discover learning gaps only after an assessment or exam.

Students may appear to understand a topic while multiple students are actually developing the same misconception.

For example, during a Python recursion lesson, students may understand recursive calls but struggle to identify the condition that stops the recursion.

ClassPulse aims to detect these patterns earlier so that teachers can intervene while the learning gap is still recoverable.

---

## Solution

ClassPulse analyzes classroom responses to identify recurring learning patterns and misconceptions.

Instead of only asking:

> "Who got the answer wrong?"

ClassPulse focuses on:

> **"What are students misunderstanding, and what should happen next?"**

The core workflow is:

```text
TEACH
  ↓
CHECK
  ↓
DETECT
  ↓
INTERVENE
  ↓
VERIFY

Key Features:
AI Classroom Scan

Analyzes recent classroom responses to identify learning gaps and recurring misconceptions.

Classroom Learning Health

Provides an overview of topic mastery, classroom understanding, students needing support, and recent activity.

AI Misconception Detection

Shows the detected misconception, affected students, evidence from responses, AI confidence, and recommended intervention.

Rescue Mode

Provides a targeted learning intervention through:

Visual Explanation → Guided Practice → Quick Challenge → Re-assessment

The prototype demonstrates concept recovery from 42% to 86%.

Example

Topic: Python Recursion

Detected: Base-case confusion

Students affected: 18

AI confidence: 94%

ClassPulse identifies the learning pattern, helps the teacher understand the problem, launches a targeted intervention, and verifies recovery.

Technology
HTML5
CSS3
JavaScript

The current prototype runs entirely in the browser and does not require a backend.

Project Structure
ClassPulse/
├── index.html
├── style.css
├── script.js
└── README.md

Run Locally
Download or clone this repository.
Open the ClassPulse folder.
Open index.html in a browser.

Or use VS Code + Live Server:

Open the folder in VS Code.
Right-click index.html.
Select Open with Live Server.
Current Prototype

This repository contains the interactive frontend prototype for the iQOO Hackathon Phase 1 screening.

Future Implementation:

The full hackathon implementation is planned to extend the prototype with:

Real student response collection
AI-powered response analysis
Local/open-source AI integration
Phone-first student interactions
Teacher-student synchronization
Real-time classroom analytics
Office Kit integration

These are planned extensions and are not represented as fully implemented in the current prototype

The full hackathon implementation is planned to extend the prototype with real student response collection, AI analysis, phone-first interactions, local/open-source AI, teacher-student synchronization, and Office Kit integration.

Vision:

Don't wait for the exam to discover the misconception.

ClassPulse aims to help teachers detect learning gaps earlier, intervene smarter, and verify learning recovery.

iQOO Hackathon — Smart Education

Team: 
APPLE EATERS
