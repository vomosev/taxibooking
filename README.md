# Taxi Booking Application

This is a taxi booking application where passengers can book rides, drivers can select bookings, and both parties can rate each other after journey completion. The application uses Next.js for the frontend, Node.js with Express for the backend, and MySQL for data persistence.

## Project Structure

- **app/**: Contains the Next.js frontend application.
  - `layout.jsx`: Defines the layout for the application, including global styles and metadata.
  - `page.jsx`: Main entry point for the application, rendering the home page.
  - `components/`: Contains reusable components like `Header`, `Footer`, `BookingForm`, `DriverDashboard`, and `RatingForm`.

- **server/**: Contains the Node.js backend application.
  - `index.js`: Entry point for the Express server, setting up middleware and routes.
  - `routes/`: Defines API routes for authentication, bookings, ratings, and health checks.
  - `controllers/`: Contains logic for handling requests related to authentication, bookings, and ratings.
  - `models/`: Defines database models for `User`, `Booking`, and `Rating`.
  - `db/connection.js`: Establishes a connection to the MySQL database.

- **schema.sql**: SQL file defining the database schema for users, bookings, and ratings tables.

- **tests/unit/**: Contains unit tests for controllers using Jest.

- **.github/workflows/ci.yml**: GitHub Actions configuration for CI/CD pipeline.

## Setup

### Prerequisites

- Node.js (v14 or later)
- Docker and Docker Compose
- MySQL

### Environment Variables

Create a `.env` file in the root directory based on `.env.example` and set the following environment variables:

- `JWT_SECRET`: Secret used to sign JWT tokens.
- `DB_HOST`: Database host address.
- `DB_USER`: Database username.
- `DB_PASSWORD`: Database password.
- `DB_NAME`: Database name.

### Running Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/taxi-booking-app.git
   cd taxi-booking-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the database:**

   Ensure your MySQL server is running and execute the `schema.sql` file to set up the database schema.

4. **Run the application:**

   Use Docker Compose to start the application and database:

   ```bash
   docker-compose up
   ```

   This will start both the frontend and backend services.

5. **Access the application:**

   Open your browser and go to `http://localhost:3000` to access the application.

## Running Tests

To run unit tests, execute the following command:

```bash
npm test
```

## API Documentation

Refer to `API.md` for detailed documentation of backend endpoints, including method, path, request body, and response shape.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.