# GestureForge AI
### AI-Powered Gesture Controlled AR Drawing & Handwriting Recognition Workspace

Version: 1.0

Author: Meet Patel

---

# 1. Project Overview

GestureForge AI is a next-generation touchless Human Computer Interaction (HCI) system that allows users to interact with a computer using only hand gestures captured through a webcam.

The project combines Computer Vision, Artificial Intelligence, MediaPipe, OpenCV, TensorFlow and Flask to create an intuitive AR workspace.

Unlike traditional Air Drawing applications, GestureForge AI is designed as a complete gesture-controlled operating workspace that supports drawing, dashboard interaction, handwriting recognition, sentence generation and future real-time translation.

---

# 2. Objectives

The primary objectives of this project are:

• Touchless Human Computer Interaction

• Air Drawing

• Gesture Controlled Dashboard

• Virtual Cursor

• AI Handwriting Recognition

• Sentence Generation

• Multi-language Translation

• Modern Modular Architecture

---

# 3. Project Goals

The project should be:

✓ Professional

✓ Modular

✓ Easy to Maintain

✓ Easy to Extend

✓ Production Ready

✓ Responsive

✓ Real-Time

---

# 4. Technology Stack

Backend

Python 3.10+

Flask

OpenCV

MediaPipe

NumPy

TensorFlow

Keras

Frontend

HTML5

CSS3

JavaScript

Bootstrap 5

Future

ONNX

Transformers

Speech Engine

Translation Models

---

# 5. Folder Structure

GestureForgeAI/

app.py

requirements.txt

README.md

PROJECT_SPEC.md

TASKS.md

core/

camera.py

gesture.py

cursor.py

interaction.py

drawing.py

templates/

index.html

static/

css/

style.css

js/

main.js

drawing.js

gesture.js

cursor.js

assets/

models/

exports/

---

# 6. System Architecture

Camera

↓

MediaPipe Hand Detection

↓

Gesture Engine

↓

Virtual Cursor Engine

↓

Interaction Engine

↓

Drawing Engine

↓

AI Recognition Engine

↓

Sentence Builder

↓

Translation Engine

↓

Voice Engine (Future)

---

# 7. UI Layout

The application contains:

Top Navigation Bar

Left Toolbar

Center Camera + Canvas

Bottom Status Bar

Important:

No permanent right sidebar.

Future AI workspace should appear as a collapsible panel or bottom drawer so the drawing area remains large.

---

# 8. Workspace Modules

Module 1

Camera

Responsibilities

Capture webcam

Mirror image

FPS

Hand Detection

-------------------------------------

Module 2

Gesture Engine

Responsibilities

Finger Detection

Gesture Recognition

Gesture State

No UI Logic

-------------------------------------

Module 3

Cursor Engine

Responsibilities

Cursor Position

Cursor Smoothing

Cursor Speed

Cursor Stability

Current Region

-------------------------------------

Module 4

Interaction Engine

Responsibilities

Hover

Click

Scroll

Button Selection

Region Detection

-------------------------------------

Module 5

Drawing Engine

Responsibilities

Draw

Erase

Undo

Redo

Export

Canvas Management

-------------------------------------

Module 6

AI Recognition

Responsibilities

Stroke Capture

Character Recognition

Sentence Building

Confidence Score

-------------------------------------

Module 7

Translator (Future)

Responsibilities

Translate Text

Hindi

Gujarati

English

-------------------------------------

Module 8

Voice Output (Future)

Responsibilities

Text To Speech

---

# 9. Gesture Mapping

One Finger

Action

Draw

Canvas Only

-------------------------------------

Two Fingers

Action

Hover

Progress Circle

Click

-------------------------------------

Three Fingers

Action

Progress 0-100%

Enable Eraser Mode

Cursor turns Red

-------------------------------------

Four Fingers

Action

Progress 0-100%

Disable Eraser Mode

Cursor returns Normal

-------------------------------------

Five Fingers

Action

Progress 0-100%

Lock Dashboard

Repeat Five Fingers

↓

Unlock Dashboard

---

# 10. Dashboard Lock

When Dashboard is Locked

Drawing Disabled

Hover Disabled

Buttons Disabled

Sidebar Disabled

Only Unlock Gesture Works

---

# 11. Virtual Cursor

The Virtual Cursor controls the complete application.

Cursor States

Idle

Hover

Selecting

Drawing

Erasing

Locked

The cursor must always remain visible.

---

# 12. Progress Circle

Every critical gesture should use a dwell-time progress circle.

Example

Two Finger

↓

0%

↓

25%

↓

50%

↓

75%

↓

100%

↓

Click

Same logic applies to

Eraser ON

Eraser OFF

Dashboard Lock

Dashboard Unlock

---

# 13. Region Detection

The application is divided into regions.

Navbar

Toolbar

Canvas

Footer

Interaction changes automatically depending on the current region.

---

# 14. Air Drawing Workflow

Camera

↓

Hand Detection

↓

Gesture Detection

↓

Cursor

↓

Canvas

↓

Drawing

---

# 15. AI Handwriting Workflow

Finger

↓

Air Writing

↓

Stroke Capture

↓

Character Recognition

↓

Word Formation

↓

Sentence Builder

↓

Display Clean Text

---

# 16. Translation Workflow

Recognized Text

↓

Translation Model

↓

Target Language

↓

Output

Supported Languages

English

Hindi

Gujarati

---

# 17. Future Features

Dark Mode

Custom Gestures

Voice Output

Cloud Save

Multiple Brush Styles

Shape Detection

Presentation Control

Virtual Whiteboard

Gesture Shortcuts

AI Suggestions

Multi-Hand Support

---

# 18. Coding Standards

Follow SOLID Principles.

Follow PEP8.

Maximum file size:

400 lines

Every function must contain a docstring.

Avoid duplicate code.

No unnecessary global variables.

Use meaningful names.

Keep logic modular.

Never mix UI logic with AI logic.

Never mix Camera logic with Gesture logic.

---

# 19. Development Rules

Implement one module at a time.

Never modify unrelated files.

Always keep backward compatibility.

Always test before moving to the next phase.

---

# 20. Development Phases

Phase 1

Project Setup

UI

Camera

MediaPipe

-------------------------------------

Phase 2

Gesture Engine

Cursor Engine

-------------------------------------

Phase 3

Interaction Engine

Click

Hover

Scroll

-------------------------------------

Phase 4

Drawing

Undo

Redo

Export

-------------------------------------

Phase 5

AI Handwriting Recognition

Character Detection

Sentence Builder

-------------------------------------

Phase 6

Translation

-------------------------------------

Phase 7

Voice Output

-------------------------------------

Phase 8

Advanced AI Features

---

# 21. Success Criteria

The project is considered complete when:

✓ Smooth Virtual Cursor

✓ Stable Gesture Recognition

✓ Real-Time Air Drawing

✓ Dashboard Control Using Gestures

✓ AI Handwriting Recognition

✓ Sentence Generation

✓ Translation Support

✓ Clean Modular Architecture

✓ Professional UI

✓ Production Ready Code

---

END OF DOCUMENT