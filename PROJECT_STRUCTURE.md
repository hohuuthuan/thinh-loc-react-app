# Construction Company Website - Project Structure

## Overview
A modern, responsive, high-performance construction company website built with React 19, TypeScript, TailwindCSS, and Framer Motion.

## Directory Structure

```
client/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky header with navigation
│   │   │   ├── Footer.tsx          # Multi-column footer
│   │   │   └── index.ts            # Layout exports
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Fullscreen hero (100vh)
│   │   │   ├── StatsSection.tsx     # Animated counters
│   │   │   ├── AboutSection.tsx     # Company info with image
│   │   │   ├── ServicesSection.tsx  # Service cards grid
│   │   │   ├── ProjectsSection.tsx  # Project gallery with filters
│   │   │   ├── WorkflowSection.tsx  # Process timeline
│   │   │   ├── TestimonialsSection.tsx # Carousel of testimonials
│   │   │   ├── PartnersSection.tsx  # Partner logos marquee
│   │   │   ├── BlogSection.tsx      # Latest blog posts
│   │   │   ├── ContactSection.tsx   # Contact form & info
│   │   │   └── index.ts             # Section exports
│   │   └── ui/
│   │       ├── Button.tsx           # Reusable button component
│   │       ├── Card.tsx             # Reusable card component
│   │       ├── Badge.tsx            # Badge & ScrollAnimation
│   │       └── index.ts             # UI exports
│   ├── hooks/
│   │   └── index.ts                 # Custom React hooks
│   │       - useInView: Intersection Observer hook
│   │       - useScrollDirection: Track scroll direction
│   │       - useCountUp: Animate counter numbers
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces
│   ├── utils/
│   │   └── data.ts                  # Mock data and constants
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # React entry point
│   ├── index.css                    # Tailwind directives
│   └── App.css                      # (minimal, Tailwind-based)
├── public/                          # Static assets
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS configuration
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── package.json                     # Dependencies & scripts
└── index.html                       # HTML entry point
```

## Key Components

### Layout
- **Header**: Sticky navigation with hamburger menu (mobile), transparent → solid background on scroll
- **Footer**: Multi-column layout with company info, links, contact, and business hours

### Sections
1. **Hero**: Fullscreen background image with dark overlay, title, subtitle, and CTA buttons
2. **Stats**: Animated counters for years, projects, team members, satisfaction
3. **About**: Two-column layout with image and company mission
4. **Services**: 6 service cards in responsive grid (3 cols desktop, 2 tablet, 1 mobile)
5. **Projects**: Filterable project gallery with overlay on hover
6. **Workflow**: 5-step process with timeline visualization
7. **Testimonials**: Carousel with auto-play and manual navigation
8. **Partners**: Horizontal marquee of partner logos
9. **Blog**: Grid of latest blog posts with images and categories
10. **Contact**: Split layout with form and contact information

## Technologies

### Core
- **React 19.2.4** - UI library with hooks
- **TypeScript 6.0** - Type safety
- **Vite 8.0** - Development server & bundler

### Styling
- **TailwindCSS 3.4** - Utility-first CSS framework
- **PostCSS 8.4** - CSS processing

### Animation
- **Framer Motion 11.0** - Smooth animations (enter/exit, hover effects)

### Development
- **ESLint 9.39** - Code quality
- **TypeScript ESLint 8.58** - TypeScript linting

## Performance Optimizations

1. **Lazy Loading**: Native `loading="lazy"` attribute on images
2. **Code Splitting**: Vite automatically chunks code
3. **memoization**: React.memo applied to prevent unnecessary re-renders
4. **Intersection Observer**: useInView hook for scroll animations
5. **Optimized Images**: Unsplash URLs with `w` and `h` parameters
6. **CSS Minimization**: TailwindCSS production build removes unused styles
7. **Smooth Scrolling**: Browser-native `scroll-behavior: smooth`

## Component Patterns

### Functional Components
All components are functional with React hooks:
```tsx
export const MyComponent = () => {
  // Component logic
  return <div>Content</div>;
};
```

### Props with TypeScript
```tsx
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export const MyComponent = ({ title, onClick }: MyComponentProps) => {
  // Component logic
};
```

### Scroll Animations
Uses `ScrollAnimation` wrapper component:
```tsx
<ScrollAnimation direction="up" delay={0.1}>
  <div>Content appears on scroll</div>
</ScrollAnimation>
```

## Responsive Design

### Breakpoints
- **Mobile**: 0-640px (default)
- **Tablet**: 640px-1024px (md:)
- **Desktop**: 1024px+ (lg:)

Mobile-first design approach: start with mobile styles, use `md:` and `lg:` prefixes for larger screens.

## Color Palette

TailwindCSS custom colors (configured in `tailwind.config.js`):
- **Primary**: Blue (#0ea5e9) - CTAs, highlights
- **Dark**: Charcoal (#111827 - #0c3d66) - Text, backgrounds
- **Gray**: Standard TailwindCSS grays - Neutral areas

## Accessibility Features

- Semantic HTML elements (header, nav, main, section, footer)
- Proper heading hierarchy (h1 → h2 → h3)
- Image alt text
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast text colors
- Focus visible states on buttons

## Development Workflow

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs Vite dev server with HMR (Hot Module Replacement)

### Build
```bash
npm run build
```
Creates optimized production build in `dist/`

### Preview
```bash
npm run preview
```
Preview the production build locally

### Lint
```bash
npm run lint
```
Check code quality with ESLint

## Performance Metrics

- **Initial Load**: ~335KB JavaScript (gzip: 104KB)
- **CSS**: ~21KB (gzip: 4.4KB)
- **HTML**: 450 bytes
- **Build Time**: ~769ms
- **Modules**: 390 transformed

## Browser Support

Modern browsers with ES2020+ support:
- Chrome/Edge 88+
- Firefox 87+
- Safari 13+
- Mobile browsers (iOS Safari 13+, Chrome Android)

## Future Enhancements

1. Add page transitions with Framer Motion
2. Implement dark mode toggle
3. Add newsletter signup integration
4. Video background in hero section
5. Animation prefers-reduced-motion
6. Service worker for offline support
7. Image optimization with Next.js Image or similar
8. CMS integration for dynamic content
9. Multi-language support (i18n)
10. Analytics integration

## Notes

- All images are from Unsplash with lazy loading enabled
- Mock data in `utils/data.ts` can be replaced with API calls
- Form validation is basic (no external library) - consider adding Zod or similar for production
- No state management library used (React context/hooks sufficient for current scope)
