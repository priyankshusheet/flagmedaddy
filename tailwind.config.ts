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
				sans: ['Poppins', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Enhanced Gen-Z colors
				'red-flag': '#FF3B30',
				'green-flag': '#32D74B',
				'off-white': '#FAFAFA',
				'charcoal': '#0F0F0F',
				'almost-black': '#1C1C1E',
				'medium-gray': '#6E6E73',
				'electric-purple': '#8E44AD',
				'soft-gray': '#E1E1E6',
				'purple-hover': '#6E2F8B',
				'surprise-purple': '#C39BD3',
				'surprise-hover': '#9B59B6',
				'neon-pink': '#FF0080',
				'neon-blue': '#00D4FF',
				'neon-green': '#00FF88',
				'neon-yellow': '#FFFF00',
				
				// Keep existing shadcn colors
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
				}
			},
			fontSize: {
				'app-title': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
				'app-subtitle': ['1.2rem', { lineHeight: '1.4', fontWeight: '500' }],
				'app-result': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
				'app-body': ['1rem', { lineHeight: '1.4', fontWeight: '400' }],
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.8)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #8E44AD, 0 0 10px #8E44AD, 0 0 15px #8E44AD',
						borderColor: '#8E44AD'
					},
					'50%': { 
						boxShadow: '0 0 20px #8E44AD, 0 0 30px #8E44AD, 0 0 40px #8E44AD',
						borderColor: '#C39BD3'
					}
				},
				'rainbow': {
					'0%': { color: '#FF3B30' },
					'25%': { color: '#8E44AD' },
					'50%': { color: '#32D74B' },
					'75%': { color: '#FF0080' },
					'100%': { color: '#FF3B30' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'typing': 'typing 2s steps(40, end)',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'rainbow': 'rainbow 3s ease-in-out infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
