import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export default function Home() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      {/* Background decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/15" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/15" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/10" />
      </div>

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
        <Sparkles className="h-3.5 w-3.5" />
        Disponible para proyectos
      </div>

      {/* Greeting */}
      <p className="mb-3 text-base font-medium text-foreground/60 sm:text-lg">
        Hola, soy Adrián 👋
      </p>

      {/* Main heading */}
      <h1 className="mb-6 max-w-4xl text-balance text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
        Fullstack{' '}
        <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 bg-clip-text text-transparent">
          Developer
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mb-10 max-w-2xl text-balance text-base leading-relaxed text-foreground/60 sm:text-lg md:text-xl">
        Construyo productos web modernos y escalables con{' '}
        <strong className="font-medium text-foreground/80">Next.js</strong>,{' '}
        <strong className="font-medium text-foreground/80">TypeScript</strong> y{' '}
        <strong className="font-medium text-foreground/80">Supabase</strong>. Del diseño
        al despliegue, me encargo de todo.
      </p>

      {/* CTAs */}
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="#projects"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-indigo-600 px-7 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Ver proyectos
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-7 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-foreground/20 p-1">
          <div className="h-2 w-1 rounded-full bg-foreground/40" />
        </div>
      </div>
    </section>
  )
}
