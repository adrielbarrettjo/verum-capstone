'use strict';
var express = require('express');
// var multer = require('multer');
// var upload = multer({ dest: 'uploads/' });
var router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const config = require('../config');


// var fs = require('fs'); 
// var csv = require('csv-parser');

const {User} = require('../models/user');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;

//define the local strategy
passport.use(new Strategy(
    function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            console.log(err);
            console.log(user);
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            // return done(null, user);
            user.validatePassword(password)
                .then(function (value) {
                    console.log(value);
                    if (value) {
                        return done(null, user)
                    } else {
                        return done(null, false);
                    }
                })
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

router.post('/new-user', jsonParser, (req, res) => {
	// validation handled by ant design on front end, so don't need to do it here.
  console.log('we are in the create new user post');
  console.log(req.body);

  let {username, password, firstName, lastName, email} = req.body;


  return User.find({username})
    .count()
    .then(count => {
      if (count > 0) {
        // There is an existing user with the same username
        return Promise.reject({
          code: 422,
          reason: 'ValidationError',
          message: 'Username already taken',
          location: 'username'
        });
      }
      // If there is no existing user, hash the password
      return User.hashPassword(password);
    })
    .then(hash => {
    	console.log('there was no existing user with that username, so we will create it');
      return User.create({
        username,
        password: hash,
        firstName,
        lastName,
        email
      });
    })
    .then (function(user) {

        user.save(function (err) {
          if (err) console.log(err);
          //console.log('Success!');
          })

      return
    }) // end of then
    .then( function() {
    	console.log('successful creation of user');
    	res.redirect('/landing');
    
    })
    .catch(err => {

      if (err.reason === 'ValidationError') {
        return res.status(err.code).json(err);
      }
      res.status(500).json({code: 500, message: 'Internal server error'});
    });
});







