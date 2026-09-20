import React from 'react';
import { Terminal } from 'lucide-react';

const Whoami = () => {
  return (
    <main className='w-full max-w-4xl bg-black flex flex-col items-center justify-center p-4 scan-lines border border-green-500/30 rounded-lg gap-2.5'>
      <section className='w-full neon-text flex flex-row flex-nowrap items-center gap-2'>
        <Terminal className='w-4 h-4 text-green-400' />
        <p className='w-full text-left'>Whoami</p>
      </section>
      <section className='w-full'>
        <h2 className='text-green-400 font-bold text-lg'>Petr Kuzin</h2>
        <p className='text-green-300/80 text-sm font-mono'>
          Frontend Developer | React, Next.js, TypeScript | Node.js, NestJS |
          Full-stack Development
        </p>
        <p className='text-green-300/60 text-sm font-mono'>Belarus</p>
      </section>
      <section className='w-full'>
        <h3 className='text-green-400 font-bold mb-1'>Summary</h3>
        <p className='text-green-200/90 text-sm font-mono leading-relaxed'>
          Frontend Developer with commercial experience building modern web
          applications with React, Next.js and TypeScript. I focus on creating
          responsive, maintainable and user-friendly interfaces, with a strong
          understanding of frontend architecture, REST APIs and backend
          integration. My main technologies include React, Next.js, TypeScript,
          JavaScript, Zustand, Tailwind CSS and Node.js. I also have experience
          with NestJS, Express.js, Prisma, MySQL and SQLite. I enjoy working on
          products from idea to implementation — from designing frontend
          architecture and responsive layouts to integrating APIs and working
          with databases and backend services. I also build and publish my own
          projects, which helps me continuously improve my development skills
          and understand the full product development process. Currently open to
          Frontend Developer and Full-stack Developer opportunities, including
          remote and hybrid positions. I&apos;m interested in working with a
          professional development team where I can contribute to real products,
          solve challenging problems and continue growing as a software
          engineer.
        </p>
      </section>
      <section className='w-full'>
        <h3 className='text-green-400 font-bold mb-2'>Experience</h3>
        <div className='space-y-4'>
          <div>
            <p className='text-green-300 font-semibold text-sm'>
              Voiro — Software Engineer
            </p>
            <p className='text-green-300/60 text-xs font-mono mb-1'>
              March 2025 — September 2026 · Vitsyebsk
            </p>
            <ul className='text-green-200/80 text-xs font-mono list-disc list-inside space-y-1'>
              <li>
                Maintained and enhanced the organization&apos;s official website,
                ensuring stability, security, and up-to-date content
              </li>
              <li>
                Managed network administration — configured and monitored local
                network infrastructure, troubleshooted connectivity issues
              </li>
              <li>
                Developed a PWA for digital note-taking with HTML Canvas
                drawing, client-side PDF generation and conversion
              </li>
              <li>
                Designed PWA with offline-first capabilities for uninterrupted
                access to educational materials
              </li>
              <li>
                Built native Android app &quot;Smart Recorder&quot; (Kotlin) — offline
                audio recording with timestamp bookmarks and project-based
                organization
              </li>
              <li>
                Collaborated with instructors to tailor app to classroom needs,
                improving lecture review for 100+ users
              </li>
              <li>
                Ensured data privacy — fully offline, no internet permissions,
                all data stored locally
              </li>
              <li>
                Participated in team meetings and technical decision-making
                (tool selection, architecture, deployment)
              </li>
            </ul>
          </div>
          <div>
            <p className='text-green-300 font-semibold text-sm'>
              RevampIT — Frontend Web Developer
            </p>
            <p className='text-green-300/60 text-xs font-mono mb-1'>
              September 2024 — February 2025 · Novosibirsk
            </p>
            <ul className='text-green-200/80 text-xs font-mono list-disc list-inside space-y-1'>
              <li>
                Contributed to &quot;KARDO&quot; — web platform for urban culture events
                (BMX, skateboarding, street sports)
              </li>
              <li>
                Built platform using Next.js 14 (App Router) + TypeScript for
                fast, responsive experience
              </li>
              <li>
                Implemented event management system with 10+ search/filter
                parameters handling up to 10,000 records
              </li>
              <li>
                Built interactive pages for schedules, athlete profiles, and
                results using Server Components and Server Actions — improved
                LCP
              </li>
            </ul>
          </div>
          <div>
            <p className='text-green-300 font-semibold text-sm'>
              SagTech — Backend Developer
            </p>
            <p className='text-green-300/60 text-xs font-mono mb-1'>
              July 2024 — September 2024 · Warsaw
            </p>
            <ul className='text-green-200/80 text-xs font-mono list-disc list-inside space-y-1'>
              <li>
                Contributed to Telegram-based e-commerce platform — store
                builder for merchants
              </li>
              <li>
                Built core backend with NestJS + TypeScript — product catalog,
                order processing, user authentication
              </li>
              <li>
                Designed PostgreSQL database schema (8 tables) with JOINs and
                aggregations
              </li>
              <li>
                Integrated Strapi as headless CMS and payment gateway via
                Telegram interface
              </li>
              <li>
                Configured Docker for consistent local development across the
                team
              </li>
              <li>
                Contributed to testing strategy (Jest + Supertest), maintaining
                ~70% code coverage
              </li>
            </ul>
          </div>
          <div>
            <p className='text-green-300 font-semibold text-sm'>
              JUNION — React Developer
            </p>
            <p className='text-green-300/60 text-xs font-mono mb-1'>
              October 2022 — September 2023 · Vitsyebsk
            </p>
            <ul className='text-green-200/80 text-xs font-mono list-disc list-inside space-y-1'>
              <li>
                Built and maintained 5+ educational web applications using React
                + TypeScript for 1,000+ members
              </li>
              <li>
                Optimized frontend performance — reduced page load time by 35%
                via lazy loading and memoization
              </li>
              <li>
                Used Redux for state management, cutting codebase size by 40%
              </li>
              <li>
                Integrated REST APIs and WebSocket for real-time features (chat,
                notifications)
              </li>
              <li>
                Developed reusable UI component library with Tailwind CSS —
                reduced dev time by 25%
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='w-full'>
        <h3 className='text-green-400 font-bold mb-1'>Education</h3>
        <p className='text-green-200/90 text-sm font-mono'>
          VSTU — Computer Programming
        </p>
      </section>
    </main>
  );
};

export default Whoami;
