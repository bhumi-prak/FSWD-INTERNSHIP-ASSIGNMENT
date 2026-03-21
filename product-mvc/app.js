const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use(logger);

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Product MVC App</h1>');
});

// Product Routes
app.use('/products', productRoutes);

// Error handler
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});