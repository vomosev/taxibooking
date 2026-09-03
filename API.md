# API Documentation

This document provides details on the backend API endpoints for the Taxi Booking Application. Each endpoint is described with its HTTP method, path, request body, and response format.

## Authentication

### Signup

- **Method**: POST
- **Path**: `/api/auth/signup`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string",
    "role": "string" // "passenger" or "driver"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "User created successfully",
      "userId": "number"
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "error": "Validation error message"
    }
    ```

### Login

- **Method**: POST
- **Path**: `/api/auth/login`
- **Request Body**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "token": "string"
    }
    ```
  - **401 Unauthorized**:
    ```json
    {
      "error": "Invalid credentials"
    }
    ```

## Bookings

### Create Booking

- **Method**: POST
- **Path**: `/api/bookings`
- **Request Body**:
  ```json
  {
    "pickupLocation": "string",
    "dropoffLocation": "string",
    "scheduledTime": "string" // ISO 8601 format
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "Booking created successfully",
      "bookingId": "number"
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "error": "Validation error message"
    }
    ```

### Get Available Bookings

- **Method**: GET
- **Path**: `/api/bookings/available`
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "bookingId": "number",
        "pickupLocation": "string",
        "dropoffLocation": "string",
        "scheduledTime": "string"
      }
    ]
    ```

### Select Booking (Driver)

- **Method**: POST
- **Path**: `/api/bookings/select`
- **Request Body**:
  ```json
  {
    "bookingId": "number"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Booking selected successfully"
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "error": "Booking not found"
    }
    ```

## Ratings

### Rate Driver

- **Method**: POST
- **Path**: `/api/ratings/driver`
- **Request Body**:
  ```json
  {
    "driverId": "number",
    "rating": "number" // 1 to 5
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Driver rated successfully"
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "error": "Validation error message"
    }
    ```

### Rate Passenger

- **Method**: POST
- **Path**: `/api/ratings/passenger`
- **Request Body**:
  ```json
  {
    "passengerId": "number",
    "rating": "number" // 1 to 5
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Passenger rated successfully"
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "error": "Validation error message"
    }
    ```

## Health Check

### Health

- **Method**: GET
- **Path**: `/api/health`
- **Response**:
  - **200 OK**:
    ```json
    {
      "status": "ok"
    }
    ```