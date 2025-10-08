const express = require('express');
const userRoutes = require('./routes/user');
const apiRoutes = require('./routes/api');
const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use('/users', userRoutes);

app.use((req, res) => {
    res.status(404).send('Page Not Found (from Express catch-all)!');
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}/`);
});