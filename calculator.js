const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.post('/', (req, res) => { 
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    let result = num1 + num2;
    // var operator = req.body.operator;
    // var result = 0;
    // if (operator == '+') {
    //     result = num1 + num2;
    // } else if (operator == '-') {
    //     result = num1 - num2;
    // } else if (operator == '*') {
    //     result = num1 * num2;
    // } else if (operator == '/') {
    //     result = num1 / num2;
    // }
    // res.send(`${num1} ${operator} ${num2} = ${result}`);
    res.send(`${num1} + ${num2} = ${result}`);
});

app.listen(port, () => console.log(`Calculator app listening on port ${port}!`));
