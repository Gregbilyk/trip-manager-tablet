import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display:  ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
				headline: ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
				body:     ['Lora', '"Iowan Old Style"', 'Georgia', 'serif'],
				ui:       ['Jost', '"Avenir Next"', '"Helvetica Neue"', 'sans-serif'],
				accent:   ['"Cormorant Infant"', '"Cormorant Garamond"', 'Georgia', 'serif'],
				sans:     ['Jost', '"Avenir Next"', '"Helvetica Neue"', 'sans-serif'],
				serif:    ['Lora', '"Iowan Old Style"', 'Georgia', 'serif'],
			},
			colors: {
				/* shadcn / Radix bridge — keep these working */
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				/* Concierge raw palette — use as bg-cobalt, text-copper, etc. */
				cobalt: {
					DEFAULT:  '#0F2235',
					deep:     '#081729',
					surface:  '#16314A',
					elevated: '#1C3D5C',
					line:     '#1F3A55',
				},
				ivory:    '#F5EFE0',
				steel:    '#9CB5C9',
				copper: {
					DEFAULT: '#E07A4B',
					deep:    '#B95E33',
				},
				verdigris: {
					DEFAULT: '#6CA39C',
					deep:    '#4A8580',
				},
				mustard:  '#C9943A',
				oxblood:  '#8C3A2E',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
