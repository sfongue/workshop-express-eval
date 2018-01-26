let chalk = require('chalk');

const app = require('./src/app');

// port
const port = process.argv[2];

app.get('/', function(req, res) {
  res.end('Hello World!')
});

app.get('/bingo', function(req, res) {
  res.end('Bingo')
});

app.listen(port);

// start server here
console.log(chalk.green('Hello web server'));
