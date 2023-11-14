// server.mjs
import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 5137;

app.use(express.static(path.join(new URL('.', import.meta.url).pathname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(new URL('.', import.meta.url).pathname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
