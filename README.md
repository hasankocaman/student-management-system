# Student Management System

A full-stack web application for managing student information using Spring Boot and React.

## Project Structure

```
fullstack-cursor-project/
├── frontend/                # React frontend application
│   ├── src/                # Source files
│   ├── package.json        # Frontend dependencies
│   └── README.md          # Frontend documentation
│
└── student-service/        # Spring Boot backend application
    ├── src/               # Source files
    ├── pom.xml           # Backend dependencies
    └── README.md         # Backend documentation
```

## Prerequisites

- Node.js (v14 or higher)
- Java JDK 17 or higher
- Maven
- MySQL (or your preferred database)

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd student-service
   ```

2. Install dependencies and build:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend server will start on http://localhost:8080

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy .env.example to .env and configure environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The frontend application will start on http://localhost:3000

## Features

- Student CRUD operations
- Real-time form validation
- Responsive design
- Error handling
- Loading states
- Toast notifications

## Technologies Used

### Frontend
- React
- Material-UI
- React Router
- Axios
- React Toastify

### Backend
- Spring Boot
- Spring Data JPA
- Spring Security (planned)
- MySQL
- Maven

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
