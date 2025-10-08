const express = require('express');
const userRoutes = require('./routes/user');
const apiRoutes = require('./routes/api');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', userRoutes);
app.use('/', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running http://localhost:3000/`);
});