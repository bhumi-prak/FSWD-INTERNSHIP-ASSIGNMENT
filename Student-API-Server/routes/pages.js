const express = require('express');
const router3 = express.Router();

function getDateTime() {
  return new Date().toLocaleString();
}

router3.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to My Website</h1>
    <p>Current Date & Time: ${getDateTime()}</p>
  `);
});

router3.get('/about', (req, res) => {
  res.send(`
    <h1>About Us</h1>
    <p>This is the about page.</p>
    <p>${getDateTime()}</p>
  `);
});

router3.get('/services', (req, res) => {
  res.send(`
    <h1>Our Services</h1>
    <p>We provide AI, ML and Web Development services.</p>
    <p>${getDateTime()}</p>
  `);
});

router3.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <p>Email: contact@example.com</p>
    <p>${getDateTime()}</p>
  `);
});

module.exports = router3;