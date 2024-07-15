function errorMiddleware(err, req, res, next) {
  // Log the error internally
  console.error(err);

  // Set a default status code and message
  const statusCode = err.statusCode || 500;
  const message = err.message || "An unexpected error occurred";

  // Respond to the client with the error message and status code
  res.status(statusCode).json({
    success: false,
    message: message
  });
}

module.exports = errorMiddleware;