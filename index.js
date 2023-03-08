const express = require('express');

const app = express();

// Define an array of data objects with ids
const data = [
  { id: 1, name: 'Alice'},
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

// Define a route that takes an ID parameter and looks up the corresponding data
app.get('/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const result = data.find(d => d.id === id);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send('Data not found');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
