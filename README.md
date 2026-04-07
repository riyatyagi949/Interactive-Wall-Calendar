# Interactive Wall Calendar

A polished and responsive React calendar component inspired by a physical wall calendar layout. This project recreates the visual feel of a printed hanging calendar while adding interactive frontend features like date-range selection, notes, and responsive behavior for desktop and mobile screens.

## Project Overview

This challenge focuses strictly on frontend engineering. The goal was to translate a static wall-calendar reference into an interactive React component with strong attention to visual hierarchy, component structure, responsive design, and user experience.

The final component includes:

- A strong hero image area inspired by the reference design
- A monthly calendar grid
- Start date and end date range selection
- Distinct visual states for selected dates and in-range dates
- Integrated notes section
- Responsive layout for desktop and mobile
- localStorage-based note persistence
- Month navigation controls

## Design Goals

The design direction was based on the provided reference image of a hanging wall calendar. I wanted the interface to feel like a real printed calendar sheet pinned on a wall while still functioning like a polished digital product.

### Visual goals

- Keep the hero image as the main visual anchor
- Maintain a clean white paper-card look
- Use blue geometric accents inspired by the reference
- Keep the date grid readable and compact
- Make the notes section feel integrated, not separate
- Preserve the printed calendar feel on desktop while stacking cleanly on mobile

## Features

### Core Features

- Interactive day range selection
- Start date, end date, and in-between date highlighting
- Integrated monthly notes section
- Selected-range notes section
- Previous and next month navigation
- Today indicator
- Responsive desktop and mobile layout

### Extra Enhancements

- Wall calendar hanger visual
- Calendar month badge over the hero image
- Holiday markers for selected fixed dates
- localStorage persistence for notes
- Small stats cards for visible month and selected days

## Tech Stack

- React
- Vite
- JavaScript
- date-fns
- lucide-react
- Plain CSS

## Why React

React was chosen because this challenge is centered around frontend architecture, UI interaction, and state management. The date-range logic, month switching, and notes handling fit naturally into a component-based React structure.

## Project Structure

```bash
interactive-wall-calendar/
├─ public/
│  └─ images/
│     └─ mountain-calendar.jpg
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Calendar/
│  │  │  ├─ CalendarCard.jsx
│  │  │  ├─ CalendarHeader.jsx
│  │  │  ├─ CalendarGrid.jsx
│  │  │  ├─ DayCell.jsx
│  │  │  ├─ NotesPanel.jsx
│  │  │  └─ calendar.css
│  ├─ hooks/
│  │  └─ useCalendarRange.js
│  ├─ utils/
│  │  ├─ calendar.js
│  │  └─ storage.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .gitignore
├─ README.md
├─ package.json
├─ vite.config.js
└─ index.html
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/interactive-wall-calendar.git
```

Move into the project folder:

```bash
cd interactive-wall-calendar
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL shown in the terminal.

## Important Setup Note

Add your hero image here:

```bash
public/images/mountain-calendar.jpg
```

The layout is designed around a strong hero image to match the wall-calendar inspiration, so adding this image is important for the final visual presentation.

## How to Use

1. Open the calendar in the browser.
2. Click one date to select the start date.
3. Click another date to select the end date.
4. The days in between will be highlighted automatically.
5. Add notes in the month notes section.
6. Add notes for the selected date range in the selected-range notes section.
7. Use the arrow buttons to move between months.

## Range Selection Logic

The range selection is designed with a simple interaction model:

- First click sets the start date
- Second click sets the end date
- If the second clicked date is before the start date, the range is reordered automatically
- If a completed range already exists, the next click starts a fresh new selection

This keeps the interaction intuitive and easy to demonstrate in the assessment video.

## Notes Persistence

This project uses `localStorage` to store:

- Monthly notes
- Notes attached to the currently selected date range

This was intentionally chosen because the challenge explicitly focuses on frontend implementation and does not require a backend or database.

## Responsive Design Approach

### Desktop

On larger screens, the layout uses a split structure:

- Left sidebar for project context, stats, and notes
- Right content area for month heading, range hint, and calendar grid
- Large hero image at the top for visual balance

### Mobile

On smaller screens, the layout stacks vertically:

- Hero image first
- Notes and controls in a readable order
- Calendar grid below
- Overflow handled carefully so date selection remains usable on touch devices

## Accessibility Considerations

- Buttons include labels where needed
- Navigation controls use `aria-label`
- Calendar date cells use descriptive labels
- Tap targets are large enough for touch interaction
- Contrast is kept readable for key UI elements

## Component Breakdown

### `CalendarCard.jsx`
Main composition component that combines the hero section, sidebar, notes, month controls, and calendar grid.

### `CalendarHeader.jsx`
Responsible for showing the current month and year and handling previous and next month navigation.

### `CalendarGrid.jsx`
Builds the calendar grid and renders all visible day cells for the selected month view.

### `DayCell.jsx`
Handles visual states for:
- normal day
- muted day
- today
- selected start
- selected end
- in-range day

### `NotesPanel.jsx`
Provides:
- monthly notes
- selected-range notes
- reset range button

### `useCalendarRange.js`
Encapsulates date-range selection logic to keep the UI components cleaner.

### `calendar.js`
Contains reusable calendar utilities such as:
- month label generation
- year label generation
- visible month grid generation
- holiday marker mapping

### `storage.js`
Provides helper functions for localStorage read and write operations.

## Design Decisions

### 1. Wall calendar aesthetic
The top hero image and hanging-ring detail were added to make the component feel closer to a real printed wall calendar rather than a generic date picker.

### 2. Notes integrated into the layout
Instead of putting notes in a modal or separate page, they are placed directly inside the main component so the user can plan dates and write notes in one view.

### 3. Simple and readable range logic
The interaction was intentionally kept easy to understand so the component remains user-friendly and easy to explain during the demo.

### 4. Human-readable component structure
The project avoids unnecessary abstraction. Components are split by responsibility so the code stays review-friendly and easy to maintain.

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

