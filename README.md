# Challenge 1: Form & Poll App

This repository contains a Vue 3 application powered by Vite, Pinia, and Tailwind CSS that allows users to:

1. **Create dynamic forms** with various question types (short, long, number, multiple choice).
2. **Respond to forms** and view collected responses.
3. **Create simple polls** with options, cast votes, and view aggregated results.

---

## Table of Contents

- [Setup](#setup)
- [Assumptions](#assumptions)
- [Design Decisions](#design-decisions)
  - [Architecture & Componentization](#architecture--componentization)
  - [Styling & Theming](#styling--theming)
  - [State Management](#state-management)
  - [TypeScript Usage](#typescript-usage)

---

## Setup

1. **Clone the repository**

   ```bash
   git clone <repo-url>
   cd challenge-1
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Tailwind CSS configuration**

   - Ensure you have the following files in the project root:
     - `tailwind.config.cjs`
     - `postcss.config.cjs`
   - Import global styles in `src/main.ts`:
     ```ts
     import '@/assets/main.css'
     ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

---

## Assumptions

- **No backend**: All data (forms, polls, responses) is stored in-memory via Pinia stores.
- **Single-session persistence**: Reloading the page resets all created forms and polls.
- **Basic validation**: Only required fields (title, question text, options) are validated on the client.
- **No authentication**: Any user can create or respond to forms/polls.

---

## Design Decisions

### Architecture & Componentization

- **Views**: Located in `src/views`, separate pages for creating/responding/results of forms and polls.
- **Reusable components** in `src/components`:
  - **BaseInput**, **BaseTextarea**, **BaseSelect**, **BaseButton**, **Card**: Unified styling & behavior.
  - **QuestionBuilder**: UI to define a question and its options.
  - **QuestionRenderer**: Renders a question for respondents with appropriate input type.
  - **OptionInput**, **FormResultItem**, **PollResultItem**: Focused small components for list items.

This separation enforces the Single Responsibility Principle and makes each piece easily testable and reusable.

### Styling & Theming

- **Tailwind CSS v3**: Utility-first approach for rapid UI development.
- **Custom palette**: Blue shades defined in `tailwind.config.cjs` (50→900) to provide consistent branding.
- **Roboto font**: Loaded via local TTFs and declared in `src/assets/base.css`, applied globally with `font-sans`.
- **Global CSS**: `src/assets/main.css` imports base resets, Tailwind directives, and applies base styles to `<body>`.
- **Rounded & shadowed buttons**: `rounded-lg shadow hover:shadow-md` for a modern look.

### State Management

- **Pinia**: Simple, modular stores under `src/stores`:
  - `formStore`: Manages forms, questions, and responses.
  - `pollStore`: Manages polls, options, and votes.
- **Reactive APIs**: `ref`, `computed`, and `watch` in components for local state and prop syncing.

### TypeScript Usage

- **Typed Props & Emits**: `defineProps` and `defineEmits` macros ensure component contracts.
- **Strict Types**: Union types for question formats and poll options prevent invalid states.
- **TS Config**: `tsconfig.json` with no project references to avoid build errors; path alias `@` configured.

---
