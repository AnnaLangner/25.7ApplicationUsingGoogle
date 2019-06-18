var express = require('express');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('./config');
bodyParser = require('body-parser');
var app = express();
var googleProfile = {};
app.use(bodyParser.json());

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

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