# Masai Library Backend

Welcome to the Masai Library backend documentation! This backend provides APIs for managing books and orders in the Masai Library.

## Features

- Register and login for customers
- Add, update, delete, and view books
- Place orders for books
- View all orders placed

## Tech stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT) for authentication
- Swagger for API documentation

## Getting Started

To get started with the Masai Library backend, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up your MongoDB database and configure the connection in `app.js`.
4. Start the server using `npm start`.

## API Documentation

View the API documentation using Swagger UI:

[Swagger UI](https://your-swagger-ui-url)

Or you can view the documentation directly here:

<iframe src="https://gifted-gold-chimpanzee.cyclic.app/api-docs" width="100%" height="600px" style="border:none;"></iframe>

## Routes

- **POST /api/register**: Register a new user.
- **POST /api/login**: Login for existing users.
- **GET /api/books**: Get a list of all available books.
- **GET /api/books/:id**: Get details of a specific book by ID.
- **GET /api/books?category=fiction**: Get books by category.
- **GET /api/books?author=corey&category=fiction**: Get books by author and category.
- **POST /api/books**: Add a new book (protected route).
- **PUT /api/books/:id**: Update details of a specific book by ID (protected route).
- **DELETE /api/books/:id**: Delete a specific book by ID (protected route).
- **POST /api/order**: Place an order for books (protected route).
- **GET /api/orders**: Get all orders (protected route).


