# Evently — Events Booking App ✅

An interactive event booking UI built with Vite + React, Tailwind CSS and shadcn/ui. Browse events by category, view details, and book events. Ideal as a front-end demo or a starting point for a production booking app.

---

## 🚀 Features

- Browse events by category (Concerts, Free Events, Workshops)
- Horizontal scrollable event cards and a "View more" flow
- Event details page and booking flow with confirmation
- Persistent pages: Home (`/`), Explore (`/explore`), Bookings (`/bookings`), Profile (`/profile`)
- Responsive UI components using Tailwind + shadcn/ui
- Local demo dataset for quick testing

---

## 🧰 Tech Stack

- Framework: React (v18) + Vite
- Styling: Tailwind CSS
- UI primitives: shadcn/ui + Radix
- State/Server: React Query (@tanstack/react-query)
- Routing: React Router v6
- Testing: Vitest + Testing Library

---

## 💻 Quick Start (Windows / PowerShell)

1. Install dependencies

```powershell
npm install
```

2. Run the dev server

```powershell
npm run dev
```

3. Open http://localhost:5173 (Vite default)

4. Run tests

```powershell
npm test
# or watch mode
npm run test:watch
```

5. Build for production

```powershell
npm run build
npm run preview
```

---

## 🗂 Project Structure (key files)

- `src/`
  - `pages/Index.jsx` — Home / Explore page with category filters
  - `pages/EventDetails.jsx` — Details & booking flow
  - `pages/ViewMore.jsx` — Category listing
  - `pages/Bookings.jsx` — Bookings overview
  - `components/` — Reusable components (Header, EventCard, Carousel, BottomNav)
  - `data/events.js` — Demo dataset and helpers (`getEventsByCategory`, `getEventById`)
  - `App.jsx` — Routes and global providers (React Query, Toaster, Router)

---

## 📋 Scripts

- `npm run dev` — Start Vite dev server
- `npm run build` — Build production bundle
- `npm run build:dev` — Build in development mode
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint
- `npm test` — Run Vitest tests

---

## 💡 Notes & Tips

- The app uses a local `allEvents` dataset in `src/data/events.js` — swap in an API or a backend to persist bookings.
- UI patterns are componentized under `src/components/ui/` — good for reusing or exporting to other projects.
- Routes: add new pages in `App.jsx` and ensure custom routes are placed before the catch-all `*` route.

---

## Contributing

Contributions are welcome. Open an issue or submit a PR. Keep tests green and follow the existing code style (Tailwind + shadcn patterns).

---

Made with love using React and Vite.
