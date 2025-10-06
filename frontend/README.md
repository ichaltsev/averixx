# Averix Trading Terminal - Frontend

A professional cryptocurrency trading platform built with React, featuring advanced charting, real-time data, and secure wallet integration.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- Backend API running (see backend README)

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:8000
   REACT_APP_API_BASE_URL=http://localhost:8000/api
   ```

3. **Start development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### Development
- `npm start` - Start development server
- `npm run dev` - Alias for start (if configured)

### Building
- `npm run build` - Create production build
- `npm run bundle-budget` - Analyze bundle size and performance

### Code Quality
- `npm run lint` - Run ESLint
- `npm run typecheck` - Type checking (if TypeScript configured)
- `npm test` - Run tests

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, inputs, etc.)
│   ├── sections/       # Page sections (Hero, About, etc.)
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   └── ErrorBoundary.js # Error handling component
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── TradingTerminal.js # Main trading interface
│   ├── Dashboard.js    # User dashboard
│   ├── Auth.js         # Authentication
│   ├── Whitepaper.js   # Whitepaper viewer
│   ├── Privacy.js      # Privacy policy
│   ├── Terms.js        # Terms of service
│   └── Disclaimer.js   # Risk disclaimer
├── context/            # React context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── mock/               # Mock data for development
```

## 🌐 Pages & Routes

- `/` - Landing page with project overview
- `/trading` - Main trading terminal interface
- `/dashboard` - User dashboard and portfolio
- `/auth` - Authentication (login/signup)
- `/whitepaper` - Project whitepaper
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/disclaimer` - Trading risk disclaimer

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `REACT_APP_BACKEND_URL` | Backend API URL | `http://localhost:8000` |
| `REACT_APP_API_BASE_URL` | API base path | `http://localhost:8000/api` |

### Build Configuration

The project uses CRACO (Create React App Configuration Override) for custom webpack configuration. Key features:

- Tailwind CSS integration
- Custom PostCSS configuration
- Path aliases (`@/` for `src/`)

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables in Vercel dashboard:**
   ```
   REACT_APP_BACKEND_URL=https://your-backend.vercel.app
   REACT_APP_API_BASE_URL=https://your-backend.vercel.app/api
   ```
3. **Deploy automatically on push to main branch**

### GitHub Pages

1. **Add homepage to package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/3211-with-terminal"
   }
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run build
   npm run deploy
   ```

### Netlify

1. **Connect repository to Netlify**
2. **Set build command:** `npm run build`
3. **Set publish directory:** `build`
4. **Configure environment variables in Netlify dashboard**

## 🔒 Security Features

- Content Security Policy (CSP) headers
- XSS protection
- CSRF protection
- Secure headers configuration
- Input validation and sanitization

## ♿ Accessibility Features

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- High contrast mode support
- Reduced motion preferences

## 📱 PWA Features

- Service worker for offline functionality
- Web app manifest
- Installable on mobile devices
- Background sync
- Push notifications support

## 🎨 UI/UX Features

- Dark/light theme support
- Responsive design
- Modern gradient designs
- Smooth animations
- Loading states
- Error boundaries
- Toast notifications

## 🔧 Development Tools

- ESLint for code quality
- Prettier for code formatting
- Bundle size analysis
- Performance monitoring
- Hot reloading

## 📊 Performance

- Code splitting and lazy loading
- Bundle size optimization
- Image optimization
- Caching strategies
- Service worker caching

## 🐛 Troubleshooting

### Common Issues

1. **Build fails:**
   - Check Node.js version (16+ required)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **API connection issues:**
   - Verify backend is running
   - Check CORS configuration
   - Verify environment variables

3. **Styling issues:**
   - Ensure Tailwind CSS is properly configured
   - Check PostCSS configuration
   - Verify CSS imports

### Getting Help

- Check the [Issues](https://github.com/ichaltsev/3211-with-terminal/issues) page
- Review the backend README for API documentation
- Contact: averix.found@gmail.com

## 📄 License

This project is part of the Averix Trading Terminal platform. See the main project README for licensing information.