# Developer Quick Reference

## Quick Commands

```bash
# Start developing
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# Test the production build locally
npm run build && npm run preview
```

## File Structure Quick Reference

```
New Section?           → src/components/sections/MySection.tsx
New UI Component?      → src/components/ui/MyComponent.tsx
Need a custom hook?    → src/hooks/index.ts
Need data structure?   → src/types/index.ts
Need constant data?    → src/utils/data.ts
```

## Common Tasks

### Add a New Section

1. Create file: `src/components/sections/MySectionName.tsx`
2. Import components: `import { ScrollAnimation } from '../ui/Badge';`
3. Export: `export const MySectionName = () => { ... }`
4. Add to `src/App.tsx` in the main component

Example:
```tsx
import { ScrollAnimation } from '../ui/Badge';

export const MySectionName = () => {
  return (
    <section id="my-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up">
          <h2 className="section-title mb-4">My Section</h2>
        </ScrollAnimation>
      </div>
    </section>
  );
};
```

### Add a New UI Component

```tsx
interface MyComponentProps {
  title: string;
  children?: React.ReactNode;
}

export const MyComponent = ({ title, children }: MyComponentProps) => {
  return (
    <div className="rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      {children}
    </div>
  );
};
```

### Update Colors/Branding

Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    600: '#YourColor',
  }
}
```

### Add Animation

Use Framer Motion or built-in Tailwind animations:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

### Scroll-Triggered Animation

Use ScrollAnimation component:
```tsx
<ScrollAnimation direction="up" delay={0.1}>
  <div>Content appears when scrolled into view</div>
</ScrollAnimation>
```

## Component Patterns

### Button Variants
```tsx
// Primary
<button className="btn-primary">Click me</button>

// Secondary
<button className="btn-secondary">Click me</button>

// Ghost
<button className="btn-ghost">Click me</button>
```

### Responsive Grid
```tsx
// 1 col mobile, 2 cols tablet, 3 cols desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Section Layout
```tsx
<section id="section-name" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content here */}
  </div>
</section>
```

## Performance Notes

✅ **Good**
- Use native image lazy loading: `<img loading="lazy" />`
- Memoize heavy components: `React.memo(Component)`
- Use useCallback for event handlers passed to children
- Import only what you need

❌ **Avoid**
- Large inline styles
- Re-creating functions in render
- Unnecessary state updates
- Heavy third-party libraries

## Debugging

### React DevTools
- Install React DevTools browser extension
- Inspect component props and state
- Check performance with Profiler tab

### TypeScript Errors
```bash
# Check all errors
npm run build

# Fix types
# Look at error message → find file → fix type annotations
```

### Network Issues
- Check Network tab in DevTools
- Look for slow image loads
- Check API response times
- Monitor bundle size

## Testing Locally

```bash
# Test on different screen sizes
# Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)

# Test on mobile device
npm run dev -- --host
# Then access from phone: http://YOUR_IP:5173

# Test production build
npm run build && npm run preview
```

## Code Style

### Naming Conventions
- Components: PascalCase (`MyComponent`)
- Hooks: camelCase starting with 'use' (`useMyHook`)
- Files: PascalCase for components, camelCase for utilities
- Constants: UPPER_SNAKE_CASE (`const MAX_SIZE = 100`)

### Import Order
1. React imports
2. External libraries
3. Internal components
4. Types/Interfaces
5. Utilities/Constants
6. Styles

```tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import type { MyType } from '../../types';
import { MY_CONSTANT } from '../../utils/constants';
import './MyComponent.css';
```

## TypeScript Tips

### Use Type-Only Imports
```tsx
// Good
import type { ButtonProps } from '../../types';

// Avoid
import { ButtonProps } from '../../types';
```

### Interface Naming
```tsx
// For component props, add 'Props' suffix
interface MyComponentProps {
  title: string;
}

// For regular types/interfaces, no suffix
interface Service {
  id: number;
  name: string;
}
```

## TailwindCSS Utilities

### Common Patterns
```tsx
// Flexbox centering
<div className="flex items-center justify-center"></div>

// Responsive padding
<div className="p-4 md:p-6 lg:p-8"></div>

// Responsive text size
<h1 className="text-2xl md:text-4xl lg:text-6xl"></h1>

// Hover effects
<button className="hover:bg-primary-700 transition-colors"></button>

// Gradients
<div className="bg-gradient-to-r from-primary-600 to-primary-700"></div>
```

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 5173 in use | Kill process: `lsof -i :5173 | kill -9` |
| Styles not loading | Clear cache, rebuild: `npm run build` |
| TypeScript errors | Check types, use `npm run build` |
| Images not showing | Check URL, verify loading="lazy" |
| Build slow | Clear node_modules, reinstall |

## Resources

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Vite Docs](https://vitejs.dev)

---

**Happy Coding! 🚀**
