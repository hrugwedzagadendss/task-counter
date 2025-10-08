const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to homepage from Express!');
});

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello world!' });
});

router.post('/data', (req, res) => {
  res.json({ received: req.body, message: 'Data received via POST.' });
});

router.put('/update/:id', (req, res) => {
  console.log(`Updating ID: ${req.params.id}`, req.body);
  res.send(`Updated ID: ${req.params.id}`);
});

router.delete('/remove/:id', (req, res) => {
  res.send(`Deleted ID: ${req.params.id}`);
});

module.exports = router;