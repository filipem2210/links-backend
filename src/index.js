const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json('Api runnig');
})

app.listen(3001, () => {
  console.log('Listening on port 3001')
});
