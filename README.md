# Averix Trading Terminal

A professional cryptocurrency trading platform built with React frontend and FastAPI backend, featuring advanced charting, real-time data, and secure wallet integration.

## 🌟 Features

### Frontend (React)
- **Modern UI/UX**: Dark theme with gradient designs and smooth animations
- **Trading Terminal**: Advanced charting with real-time market data
- **PWA Support**: Installable web app with offline functionality
- **Responsive Design**: Optimized for desktop and mobile devices
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **SEO Optimized**: Meta tags, sitemap, robots.txt, Open Graph
- **Security**: CSP headers, XSS protection, secure configurations

### Backend (FastAPI)
- **RESTful API**: Clean, documented API endpoints
- **Database Integration**: MongoDB with async operations
- **Health Monitoring**: Health check endpoints for monitoring
- **CORS Configuration**: Secure cross-origin resource sharing
- **Error Handling**: Comprehensive error handling and logging
- **Scalable Architecture**: Async/await for high performance

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn
- Python 3.9+
- MongoDB (local or cloud)

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

## 📁 Project Structure

```
3211-with-terminal/
├── frontend/                 # React application
│   ├── public/              # Static assets and PWA files
│   ├── src/                 # Source code
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context
│   │   └── hooks/          # Custom hooks
│   ├── scripts/            # Build and utility scripts
│   └── vercel.json         # Vercel deployment config
├── backend/                 # FastAPI application
│   ├── server.py           # Main application file
│   ├── requirements.txt    # Python dependencies
│   └── README.md          # Backend documentation
└── tests/                  # Test files
```

## 🌐 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Set environment variables
3. Deploy automatically on push

### GitHub Pages
1. Add homepage to package.json
2. Run `npm run build && npm run deploy`

### Netlify
1. Connect repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

## 🔧 Environment Variables

### Frontend
```env
REACT_APP_BACKEND_URL=https://your-backend.vercel.app
REACT_APP_API_BASE_URL=https://your-backend.vercel.app/api
```

### Backend
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=averix_trading_terminal
CORS_ORIGINS=http://localhost:3000,https://your-frontend.vercel.app
SECRET_KEY=your-secret-key
```

## 📊 API Endpoints

- `GET /api/` - API information
- `GET /api/health` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - Get status checks

## 🛡️ Security Features

- Content Security Policy (CSP)
- XSS and CSRF protection
- Secure headers configuration
- Input validation and sanitization
- CORS protection
- Environment-based secrets

## ♿ Accessibility

- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Focus management
- High contrast mode
- Reduced motion preferences

## 📱 PWA Features

- Service worker for offline functionality
- Web app manifest
- Installable on mobile devices
- Background sync
- Push notifications

## 🎨 UI/UX

- Dark/light theme support
- Responsive design
- Modern gradient designs
- Smooth animations
- Loading states
- Error boundaries
- Toast notifications

## 📈 Performance

- Code splitting and lazy loading
- Bundle size optimization
- Image optimization
- Caching strategies
- Service worker caching
- Bundle budget monitoring

## 🧪 Testing

```bash
# Frontend tests
cd frontend && npm test

# Backend tests
cd backend && pytest
```

## 📚 Documentation

- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)
- [API Documentation](http://localhost:8000/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

- **Founder**: Ivan Chaltsev
- **Email**: averix.found@gmail.com
- **Telegram**: [@averix_founder](https://t.me/averix_founder)
- **Issues**: [GitHub Issues](https://github.com/ichaltsev/3211-with-terminal/issues)

## 🚀 Live Demo

- **Frontend**: [https://averix-trading-terminal.vercel.app](https://averix-trading-terminal.vercel.app)
- **Backend API**: [https://averix-backend.vercel.app](https://averix-backend.vercel.app)
- **API Docs**: [https://averix-backend.vercel.app/docs](https://averix-backend.vercel.app/docs)

---

**Built with ❤️ by the Averix team**
