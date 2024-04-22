const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json([
    {
      id: '1',
      title: 'Tech Review: Apple iPhone 15',
      review: 'The latest iPhone with advanced camera technology and improved performance.',
    },
    {
      id: '2',
      title: 'Tech Review: Samsung Galaxy S23',
      review: 'A powerful Android phone with a sleek design and high-end features.',
    },
    {
      id: '3',
      title: 'Tech Review: Google Pixel 8',
      review: 'A Google flagship phone with excellent camera capabilities and smooth software.',
    },
  ]);
});

module.exports = app;
