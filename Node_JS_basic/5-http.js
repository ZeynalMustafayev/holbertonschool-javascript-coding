const http = require('http');
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;
const databasePath = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
        const studentData = await countStudents(databasePath);
        res.end(`This is the list of our students:\n${studentData}`);
    }
    catch (error){
        res.statusCode = 500;
        res.end("cannot load the database")
    }

  } else {
    res.statusCode = 404;
    res.end('server not found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
