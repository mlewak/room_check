# Status Light App

This project is a simple web application that displays a circle which can be colored green, grey, or red. The color of the circle can be changed through an HTTP POST request.

## Project Structure

- `public/index.html`: HTML structure for the web page displaying the circle.
- `public/styles.css`: Styles for the circle in different colors.
- `app.js`: Entry point of the application, sets up the Express server.
- `routes/status.js`: Defines routes for serving the web page and changing the circle's color.
- `Dockerfile`: Instructions to build the Docker image using Alpine Linux and Node.js.
- `docker-compose.yml`: Defines the services for the application.
- `package.json`: Configuration file for npm, listing dependencies and scripts.

## Getting Started

To build and run the application using Docker, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Build the Docker image:
   ```
   docker-compose build
   ```

3. Run the application:
   ```
   docker-compose up
   ```

4. Access the application in your web browser at `http://localhost:3000`.

## API Endpoints

- **GET /**: Serves the web page displaying the circle.
- **POST /status**: Changes the color of the circle. The request body should include a JSON object with the desired color (e.g., `{"color": "green"}`).

## License

This project is licensed under the MIT License.