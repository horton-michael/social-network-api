// * DEPENDENCIES
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// * APP / PORT
const app = express();
const PORT = process.env.PORT || 3001;

// * MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// * ROUTES
app.use(routes);
// app.use('/thoughts', thoughtRoutes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
  });
});
