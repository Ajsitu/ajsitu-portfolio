/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/lib/**/*.{js,ts}',
    '../../packages/ui/index.ts',
  ],
  theme: {
    extend: {
      colors: {
        char: '#191919',
        'char-deep': '#101010',
        'char-soft': '#1f1f1f',
        vanilla: '#fffaee',
        brand: { DEFAULT: '#fe5102', dim: '#c8400a' },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'monospace'],
        grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: { site: '1320px' },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-100%)' } },
        slidebar: { '0%': { transform: 'translateX(-100%)' }, '60%,100%': { transform: 'translateX(100%)' } },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        marquee: 'marquee 26s linear infinite',
        slidebar: 'slidebar 2.4s ease-in-out infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}
