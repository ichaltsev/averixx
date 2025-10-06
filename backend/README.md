# Averix Trading Terminal - Backend API

A FastAPI-based backend service for the Averix Trading Terminal platform, providing secure API endpoints for trading operations, user management, and data processing.

## 🚀 Quick Start

### Prerequisites

- Python 3.9+
- MongoDB (local or cloud instance)
- pip or poetry for dependency management

### Local Development

1. **Clone and navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables:**
   Create a `.env` file in the backend directory:
   ```env
   # Database Configuration
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=averix_trading_terminal
   
   # CORS Configuration
   CORS_ORIGINS=http://localhost:3000,https://averix-trading-terminal.vercel.app,https://ichaltsev.github.io
   
   # API Configuration
   API_V1_STR=/api
   PROJECT_NAME=Averix Trading Terminal
   
   # Security
   SECRET_KEY=your-secret-key-here-change-in-production
   ALGORITHM=HS256
   ACCESS_TOKEN_EXPIRE_MINUTES=30
   
   # Environment
   ENVIRONMENT=development
   DEBUG=True
   ```

5. **Start the development server:**
   ```bash
   uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```

6. **Access the API:**
   - API: [http://localhost:8000](http://localhost:8000)
   - Interactive docs: [http://localhost:8000/docs](http://localhost:8000/docs)
   - Health check: [http://localhost:8000/api/health](http://localhost:8000/api/health)

## 📡 API Endpoints

### Core Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/` | API root information |
| `GET` | `/api/health` | Health check endpoint |
| `POST` | `/api/status` | Create status check |
| `GET` | `/api/status` | Get status checks |

### Health Check Response

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "database": "connected",
  "version": "1.0.0"
}
```

## 🗄️ Database Schema

### Status Checks Collection

```json
{
  "_id": "ObjectId",
  "id": "uuid-string",
  "client_name": "string",
  "timestamp": "datetime"
}
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MONGO_URL` | MongoDB connection string | Yes | - |
| `DB_NAME` | Database name | Yes | - |
| `CORS_ORIGINS` | Allowed CORS origins (comma-separated) | Yes | - |
| `SECRET_KEY` | JWT secret key | Yes | - |
| `ALGORITHM` | JWT algorithm | No | HS256 |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | Token expiration time | No | 30 |
| `ENVIRONMENT` | Environment (development/production) | No | development |
| `DEBUG` | Debug mode | No | False |

### CORS Configuration

The API is configured to allow requests from:
- `http://localhost:3000` (local development)
- `https://averix-trading-terminal.vercel.app` (Vercel deployment)
- `https://ichaltsev.github.io` (GitHub Pages)

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Set environment variables in Vercel dashboard:**
   - `MONGO_URL`: Your MongoDB connection string
   - `DB_NAME`: Database name
   - `CORS_ORIGINS`: Allowed origins
   - `SECRET_KEY`: Secure secret key

### Docker

1. **Create Dockerfile:**
   ```dockerfile
   FROM python:3.9-slim
   
   WORKDIR /app
   
   COPY requirements.txt .
   RUN pip install -r requirements.txt
   
   COPY . .
   
   EXPOSE 8000
   
   CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]
   ```

2. **Build and run:**
   ```bash
   docker build -t averix-backend .
   docker run -p 8000:8000 --env-file .env averix-backend
   ```

### Railway

1. **Connect your GitHub repository**
2. **Set environment variables in Railway dashboard**
3. **Deploy automatically on push**

## 🔒 Security Features

- CORS protection
- Input validation with Pydantic
- Environment-based configuration
- Secure headers (configured in deployment)
- JWT token authentication (ready for implementation)

## 📊 Monitoring & Logging

- Structured logging with timestamps
- Health check endpoint for monitoring
- Error handling and reporting
- Database connection monitoring

## 🧪 Testing

### Run Tests

```bash
# Install test dependencies
pip install pytest pytest-asyncio httpx

# Run tests
pytest
```

### Test Coverage

```bash
# Install coverage
pip install pytest-cov

# Run with coverage
pytest --cov=server --cov-report=html
```

## 🔧 Development Tools

### Code Quality

```bash
# Format code
black server.py

# Sort imports
isort server.py

# Lint code
flake8 server.py

# Type checking
mypy server.py
```

### Database Management

```bash
# Connect to MongoDB
mongosh "mongodb://localhost:27017/averix_trading_terminal"

# View collections
show collections

# Query status checks
db.status_checks.find().pretty()
```

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB connection failed:**
   - Check if MongoDB is running
   - Verify connection string
   - Check network connectivity

2. **CORS errors:**
   - Verify CORS_ORIGINS environment variable
   - Check frontend URL matches allowed origins

3. **Import errors:**
   - Ensure all dependencies are installed
   - Check Python version compatibility

### Logs

Check application logs for detailed error information:
```bash
# Development
uvicorn server:app --reload --log-level debug

# Production
# Check your deployment platform's logs
```

## 📈 Performance

- Async/await for non-blocking operations
- Connection pooling for MongoDB
- Efficient data serialization with Pydantic
- Optimized database queries

## 🔄 API Versioning

The API uses URL-based versioning:
- Current version: `/api/v1/` (default)
- Future versions: `/api/v2/`, etc.

## 📝 API Documentation

Interactive API documentation is available at:
- Swagger UI: `/docs`
- ReDoc: `/redoc`

## 🤝 Contributing

1. Follow PEP 8 style guidelines
2. Add type hints to all functions
3. Write tests for new features
4. Update documentation
5. Use conventional commit messages

## 📄 License

This project is part of the Averix Trading Terminal platform. See the main project README for licensing information.

## 📞 Support

- Email: averix.found@gmail.com
- Issues: [GitHub Issues](https://github.com/ichaltsev/3211-with-terminal/issues)
- Documentation: [API Docs](http://localhost:8000/docs)
