const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling missing! The server will crash here if someAsyncOperation throws an error.
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Something went wrong!');
  }
  return 'Operation successful';
}