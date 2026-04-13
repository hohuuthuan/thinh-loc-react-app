# Setup and Deployment Guide

## Development Setup

### Prerequisites
- **Node.js**: Version 20.0 or higher
- **npm**: Version 10.0 or higher (comes with Node.js)

### Quick Setup

```bash
# Navigate to client directory
cd d:\WEB-REACT-APP\client

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at: **http://localhost:5173/**

### Development Server Features
- **Hot Module Replacement (HMR)**: Changes reflect instantly without full refresh
- **Fast Refresh**: React component changes update without losing state
- **SourceMaps**: Full debugging support in browser dev tools
- **TypeScript Checking**: Real-time type checking during development

## Building for Production

### Create Optimized Build

```bash
npm run build
```

This will:
1. Compile TypeScript to JavaScript
2. Bundle all modules
3. Apply TailwindCSS purging (removes unused styles)
4. Minify CSS and JavaScript
5. Create optimized assets in `dist/` folder

### Build Output
```
dist/
├── index.html              (450 bytes)
├── assets/
│   ├── index-*.css        (21.28 KB → 4.36 KB gzipped)
│   └── index-*.js         (335.31 KB → 104.19 KB gzipped)
└── ...other assets
```

### Preview Production Build

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

The preview will run on `http://localhost:4173/`

## Deployment Options

### Option 1: Netlify (Recommended for Static Sites)

1. **Connect Repository**
   - Push code to GitHub/GitLab
   - Go to netlify.com
   - Click "New site from Git"

2. **Configure Build**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**
   - Netlify automatically deploys on every push
   - Get custom domain setup

### Option 2: Vercel

1. **Connect Repository**
   - Go to vercel.com
   - Import your GitHub repository

2. **Build Settings**
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Deploy**
   - Automatic deployments on push

### Option 3: GitHub Pages

1. **Update vite.config.ts**
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

2. **Add GitHub Actions Workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Build and Deploy
   on: [push]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '20'
         - run: cd client && npm install
         - run: cd client && npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./client/dist
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Set source to gh-pages branch

### Option 4: Traditional Web Server

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to your web server (Apache, Nginx, etc.)

3. **Server Configuration** for SPA (Single Page Application):
   
   **Nginx** - Add to server block:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```
   
   **Apache** - Create `.htaccess`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Environment Variables

Create `.env` file in the `client/` directory for environment-specific values:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_GA_ID=your-google-analytics-id
```

Access in code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL
```

## Performance Optimization Checklist

- [x] Image lazy loading enabled
- [x] CSS minimization (TailwindCSS)
- [x] JavaScript minification (Vite)
- [x] Code splitting (automatic)
- [x] Gzip compression configured
- [ ] CDN caching headers set
- [ ] Browser caching configured
- [ ] Service Worker (PWA support)
- [ ] Analytics integration
- [ ] SEO optimization

## SEO Optimization

Add to `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Professional construction company providing residential, commercial, and industrial services.">
  <meta name="keywords" content="construction, building, residential, commercial">
  <meta name="author" content="BuildCo">
  
  <!-- Open Graph -->
  <meta property="og:title" content="BuildCo - Construction Excellence">
  <meta property="og:description" content="Professional construction services">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:url" content="https://yourdomain.com">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="BuildCo">
  <meta name="twitter:description" content="Professional construction services">
  <meta name="twitter:image" content="/og-image.jpg">
  
  <title>BuildCo - Construction Excellence</title>
</head>
```

## Monitoring and Analytics

### Google Analytics Setup

1. Create `src/utils/analytics.ts`:
```tsx
export const trackPageView = (path: string) => {
  if (window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_ID, {
      page_path: path
    });
  }
};
```

2. Add script to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
# Windows: netstat -ano | findstr :5173
# macOS/Linux: lsof -i :5173
kill -9 <PID>
```

### Build Errors
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear cache: `npm cache clean --force`
3. Check Node version: `node --version` (should be 20+)

### Slow Build
- TypeScript check slow: `npm run build -- --minify=false`
- Update npm: `npm install -g npm@latest`
- Check disk space and RAM

### Import Errors
- Verify file paths (case-sensitive on Linux)
- Check `tsconfig.json` paths configuration
- Ensure all dependencies installed: `npm install`

## Maintenance

### Regular Tasks
- [ ] Update dependencies: `npm update`
- [ ] Check security: `npm audit`
- [ ] Monitor build size: Track `dist/` folder
- [ ] Review error logs
- [ ] Update content in `utils/data.ts`

### Version Updates
```bash
# Check outdated packages
npm outdated

# Update to latest minor versions
npm update

# Update to specific version
npm install package-name@latest
```

## Getting Help

- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **TailwindCSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Vite**: https://vitejs.dev

## Support Resources

- GitHub Issues: Report bugs and feature requests
- Stack Overflow: Tag with react, typescript, tailwindcss
- Community Discord: Join React/TailwindCSS communities

---

**Last Updated**: 2024-04-13
