const express = require('express');
const app = express();
const port = 5001;

app.use(express.json());

// Sample route
app.get('/api/customers', (req, res) => {
  // Fetch data from database and send response
  // Example response
  res.json([
    { id: 1, image: 'img1.jpg', name: 'John Doe', birthday: '1990-01-01', gender: 'Male', job: 'Engineer' },
    // More data...
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
