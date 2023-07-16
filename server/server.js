const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.json({"data": ["user1", "user2", "user3"]})
})

const PORT = 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}`);
})