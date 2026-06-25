import { type ReactNode } from 'react'

/** Brand + utility SVG icons. All use currentColor so they inherit text color. */
type P = { className?: string }

/* ---- Lucide icons (stroke), matching the icon set used in the Figma deck ---- */
function Lucide({ className = 'h-4 w-4', children }: P & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  )
}
export const IconMenu = ({ className }: P) => (
  <Lucide className={className}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </Lucide>
)
export const IconArrowUp = ({ className }: P) => (
  <Lucide className={className}>
    <path d="M12 19V5" />
    <path d="m5 12 7-7 7 7" />
  </Lucide>
)
export const IconArrowLeft = ({ className }: P) => (
  <Lucide className={className}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </Lucide>
)
export const IconArrowRight = ({ className }: P) => (
  <Lucide className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Lucide>
)
export const IconArrowUpRight = ({ className }: P) => (
  <Lucide className={className}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </Lucide>
)
export const IconCirclePlus = ({ className }: P) => (
  <Lucide className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8" />
    <path d="M12 8v8" />
  </Lucide>
)

export function IconGitHub({ className = 'h-4 w-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export function IconLinkedIn({ className = 'h-4 w-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function IconBehance({ className = 'h-4 w-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.799 5.698c.589 0 1.12.051 1.606.156.483.102.9.273 1.245.507.348.235.61.553.801.95.184.392.28.882.28 1.466 0 .628-.144 1.152-.434 1.57-.287.418-.712.76-1.277 1.02.772.222 1.35.613 1.732 1.173.383.561.572 1.235.572 2.026 0 .637-.124 1.189-.371 1.652-.249.464-.583.84-1.001 1.13-.418.292-.896.504-1.434.64-.529.135-1.082.204-1.644.204H0V5.698h7.799zm-.32 4.071c.484 0 .883-.115 1.197-.347.312-.228.466-.601.466-1.117 0-.286-.052-.52-.154-.703a1.13 1.13 0 0 0-.422-.43 1.704 1.704 0 0 0-.6-.213 3.598 3.598 0 0 0-.692-.063H2.911v2.886h4.568zm.179 4.277c.27 0 .527-.026.77-.078.245-.052.46-.14.648-.262.187-.123.336-.29.446-.5.108-.21.162-.481.162-.811 0-.65-.184-1.114-.55-1.392-.367-.28-.852-.418-1.456-.418H2.911v3.461h4.747zm8.703-.546c.397.387.968.58 1.713.58.535 0 .994-.135 1.379-.404.384-.27.62-.555.708-.854h2.36c-.378 1.176-.958 2.016-1.739 2.519-.782.504-1.727.756-2.836.756-.773 0-1.47-.124-2.092-.372a4.405 4.405 0 0 1-1.581-1.058 4.717 4.717 0 0 1-.998-1.643c-.234-.638-.351-1.34-.351-2.105 0-.74.12-1.43.36-2.066a4.78 4.78 0 0 1 1.02-1.65 4.708 4.708 0 0 1 1.581-1.092c.616-.265 1.3-.397 2.052-.397.838 0 1.568.162 2.19.486a4.36 4.36 0 0 1 1.54 1.302c.405.553.693 1.183.866 1.891.172.707.234 1.45.185 2.228h-7.038c0 .77.204 1.508.602 1.895zM21.184 7.52c-.317-.348-.85-.523-1.512-.523-.43 0-.787.074-1.07.222a2.107 2.107 0 0 0-.673.54 1.97 1.97 0 0 0-.36.69 3.06 3.06 0 0 0-.123.642h4.354c-.063-.676-.298-1.184-.616-1.532zM15.103 5.726h5.439v1.324h-5.439V5.726z" />
    </svg>
  )
}

export function IconMail({ className = 'h-4 w-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  )
}

export function IconGlobe({ className = 'h-4 w-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.7 2.6 15.3 0 18M12 3c-2.6 2.7-2.6 15.3 0 18" />
    </svg>
  )
}

export function IconPhone({ className = 'h-4 w-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
    </svg>
  )
}

export function IconStar({ className = 'h-4 w-4' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      />
    </svg>
  )
}
