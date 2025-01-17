const http = require('http');
const port = process.env.PORT || 3009;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Welcome to Webelight!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
