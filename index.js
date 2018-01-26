let chalk = require('chalk');

const app = require('./src/app');

// port
const port = 3000;

app.get('/', function(req, res) {
  res.end('Hello World!')
});

app.listen(port);

// start server here
console.log(chalk.green('Hello web server'));
