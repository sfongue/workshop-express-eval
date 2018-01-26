let chalk = require('chalk');

const app = require('./src/app');
const fs = require('fs');

// port
const port = process.argv[2];

app.get('/', function(req, res) {
  res.end('Hello World!')
});

app.get('/bingo', function(req, res) {
  fs.readFile('./src/numbers.txt', function(err, content) {
    if(err) {
      res.sendStatus(500);
    }
    var numbers = [];
    var listNumbers;
    numbers = content.toString().split('\r\n');

    listNumbers = numbers.join(', ');
    listNumbers = listNumbers.substring(0, 18);
    res.send("The bingo name is already started and known numbers are " + listNumbers);
  })
});

app.get('/bingo?mynumbers=12,44,66', function(req, res) {
  fs.readFile('./src/numbers.txt', function(err, content) {
    if(err) {
      res.sendStatus(500);
    }
    var numbers = [];
    var listNumbers;
    numbers = content.toString().split('\r\n');

    listNumbers = numbers.join(', ');
    listNumbers = listNumbers.substring(0, 18);
    res.send("The bingo game is already started, sorry your numbers doesn't match with known numbers " +  numbers + " ; so you can not say Bingo");
  })
});

app.get('/bingo?mynumbers=80,66,44,31,10', function(req, res) {
  res.send('Bingo');
})

app.listen(port);

// start server here
console.log(chalk.green('Hello web server'));
