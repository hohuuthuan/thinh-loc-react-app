# Construction Company Website

A modern, responsive, high-performance website for a construction company built with React, TypeScript, and TailwindCSS.

## Features

✨ **Premium Design**
- Modern, clean corporate aesthetic
- Strong visual hierarchy with large spacing
- Professional trust-oriented UI
- High-quality construction imagery

📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly interface
- Hamburger navigation on mobile

⚡ **High Performance**
- Native image lazy loading
- Optimized bundle size (335KB JS gzipped to 104KB)
- Fast build and load times (~770ms build)
- Smooth interactions on low-end devices

🎨 **Rich Interactions**
- Smooth scroll animations with Framer Motion
- Animated counters for statistics
- Interactive project gallery with filters
- Testimonial carousel with auto-play
- Partner logo marquee animation

♿ **Accessibility**
- Semantic HTML structure
- Proper heading hierarchy
- Alt text on images
- Keyboard navigation support
- High contrast text colors

## Tech Stack

- **React 19** - Latest React with hooks
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Vite** - Lightning-fast development

## Quick Start

### Prerequisites
- Node.js 20+ and npm

### Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed architecture.

## Site Sections

1. **Header/Navigation** - Sticky header with logo, nav links, and CTA
2. **Hero** - Fullscreen hero with background image and CTAs
3. **Stats** - Animated counters (experience, projects, team, satisfaction)
4. **About** - Company mission and highlights
5. **Services** - Grid of 6 construction services
6. **Projects** - Filterable gallery of completed projects
7. **Workflow** - 5-step construction process
8. **Testimonials** - Client testimonials carousel
9. **Partners** - Partner logos marquee
10. **Blog** - Latest news and articles
11. **Contact** - Contact form and company information
12. **Footer** - Multi-column footer with links

## Customization

### Colors
Edit `tailwind.config.js` to customize the primary color palette:

```js
colors: {
  primary: {
    600: '#0284c7', // Change this to your brand color
  }
}
```

### Content
Update mock data in `src/utils/data.ts`:
- Services
- Projects
- Testimonials
- Blog posts
- Partner logos
- Contact information

### Images
Replace Unsplash image URLs with your own:
```tsx
<img src="your-image-url" alt="description" loading="lazy" />
```

## Performance Tips

1. **Images**: Optimize with appropriate widths/heights
2. **Data**: Consider moving to CMS for dynamic content
3. **Forms**: Add backend validation before submitting
4. **Analytics**: Integrate Google Analytics or similar
5. **SEO**: Add meta tags and structured data

## Browser Support

- Modern browsers (ES2020+)
- Chrome/Edge 88+
- Firefox 87+
- Safari 13+
- Mobile browsers

## Components

### UI Components
- `Button` - Customizable button (primary, secondary, ghost)
- `Card` - Project/service cards with hover effects
- `Badge` - Status badges
- `ScrollAnimation` - Scroll-triggered animations

### Custom Hooks
- `useInView` - Intersection Observer for scroll animations
- `useScrollDirection` - Track scroll direction (up/down)
- `useCountUp` - Animate counter numbers

## Accessibility

- Semantic HTML (header, nav, main, section, footer)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- High contrast text
- Image alt attributes

## Future Improvements

- [ ] Dark mode toggle
- [ ] Newsletter signup integration
- [ ] CMS integration for dynamic content
- [ ] Service worker for offline support
- [ ] Multi-language support (i18n)
- [ ] Advanced image optimization
- [ ] Video background support

## License

This project is a modern construction company website template. Feel free to customize it for your needs.

## Support

For issues or questions, create an issue in the repository.

---

**Built with ❤️ using React + TypeScript + TailwindCSS**
