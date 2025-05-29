const express = require('express');
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Portfolio app running on http://localhost:${PORT}`);
});
