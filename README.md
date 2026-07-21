# Solum Software (Solum SF) - Web

## Business Foundation
Solum Software is an agile development factory designing customized software solutions for SMEs. We replace operational chaos with robust, AI-powered web applications.

### Core Pillars
- **Simplicidad Extrema (UX Premium)**: Industrial-grade minimalist interfaces.
- **Offline-First**: Guaranteed continuity via browser persistence.
- **IA Práctica**: Embedded utility-focused AI models for automation.

## Tech Stack
- **Frontend**: React.js + Vite + Tailwind CSS v4.
- **Persistence**: Zustand + localForage (IndexedDB).
- **Backend & DB**: Supabase (PostgreSQL).
- **Monitoring**: Sentry (Placeholder initialized).
- **Animations**: GSAP + Lenis + Lucide React.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Structure
- `/src/lib`: Core service initializations (Supabase, Monitoring).
- `/src/store`: State management with persistence.
- `/src/components`: UI primitives and composite sections.
- `/src/App.tsx`: The primary landing page implementation.
