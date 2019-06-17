var express = require('express');
bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use(express.static('css'));
app.use(express.static('assets'));

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/auth/google', function (req, res) {
    res.render('google');
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Sorry, we could not find what you want!')
});