# Student Management System

A modern web application for managing student information, built with Spring Boot and React.

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

## Technologies Used

### Backend
- Java 17
- Spring Boot 3.2.1
- Spring Data JPA
- PostgreSQL 17
- Swagger UI for API documentation

### Frontend
- React 18
- React Router DOM
- Axios for API calls
- Bootstrap for styling

## Prerequisites

Before running the application, make sure you have the following installed:
- Java Development Kit (JDK) 17
- Node.js and npm
- PostgreSQL 17
- Maven

## Getting Started

### Database Setup
1. Install PostgreSQL 17
2. Create a database named `studentdb`
3. Update database configuration in `application.properties` if needed

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd student-service
   ```

2. Install dependencies and run:
   ```bash
   mvn spring-boot:run
   ```
The backend server will start on port 8081.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
The frontend application will start on port 3000.

## API Documentation

Once the backend is running, you can access the Swagger UI documentation at:
```
http://localhost:8081/swagger-ui.html
```

## Features

- View list of all students
- Add new student
- Update existing student information
- Delete student records
- View detailed student information

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details
