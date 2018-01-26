let chalk = require('chalk');

const app = require('./src/app');
const fs = require('fs');

// port
const port = process.argv[2];

app.get('/', function(req, res) {
  res.end('Hello World!')
});

app.get('/bingo', function(req, res) {
  //res.setHeader('Content-Type', 'application/json')
  fs.readFile('./src/numbers.txt', function(err, content) {
    if(err) {
      res.sendStatus(500);
    }
    var numbers = [];
    var listNumbers;
    numbers = content.toString().split('\r\n');

    listNumbers = numbers.join(', ');
    listNumbers = listNumbers.substring(0, 18);
    res.send(listNumbers);
  })
});

app.listen(port);

// start server here
console.log(chalk.green('Hello web server'));
