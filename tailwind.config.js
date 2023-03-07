/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      // Plain
      current: 'currentColor',
      transparent: 'transparent',
      black: 'var(--color-black)',
      white: 'var(--color-white)',

      // Semantic
      base: {
        bg: 'var(--color-base-bg)',
        'text-strong': 'var(--color-base-text-strong)',
        'text-weak': 'var(--color-base-text-weak)',
        surface: 'var(--color-base-surface)',
        'surface-text-strong': 'var(--color-base-surface-text-strong)',
        'surface-text-weak': 'var(--color-base-surface-text-weak)',
      },
      primary: {
        surface: 'var(--color-primary-surface)',
        'surface-up': 'var(--color-primary-surface-up)',
        'surface-down': 'var(--color-primary-surface-down)',
        'surface-text-strong': 'var(--color-primary-surface-text-strong)',
        'surface-text-weak': 'var(--color-primary-surface-text-weak)',
        text: 'var(--color-primary-text)',
      },
      error: {
        surface: 'var(--color-error-surface)',
        'surface-text-strong': 'var(--color-error-surface-text-strong)',
        'surface-text-weak': 'var(--color-error-surface-text-weak)',
        text: 'var(--color-error-text)',
        border: 'var(--color-error-border)',
        'border-subtle': 'var(--color-error-border-subtle)',
      },
      neutral: {
        surface: 'var(--color-neutral-surface)',
        'surface-text-strong': 'var(--color-neutral-surface-text-strong)',
        'surface-text-weak': 'var(--color-neutral-surface-text-weak)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};