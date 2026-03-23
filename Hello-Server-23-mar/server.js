const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1><p>Welcome to our website. This is the home page of our Node.js server application.</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1><p>This server is created as part of a Node.js assignment to demonstrate routing and server responses.</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1><p>Email: support@example.com<br>Phone: ----------</p>");
});

app.get("/services", (req, res) => {
    res.send("<h1>Services</h1><p>We provide web development, frontend development, and backend development services.</p>");
});

app.use((req, res) => {
    res.send("<h1>404</h1><p>Page Not Found</p>");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});