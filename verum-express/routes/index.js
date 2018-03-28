'use strict';
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const config = require('../config');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const {User} = require('../models/user');
var Strategy = require('passport-local').Strategy;


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
          res.send(user);
          })
      return
    }) // end of then
    .then( function() {
    	console.log('successful creation of user');
      res.redirect('/');
    })
    .catch(err => {
      if (err.reason === 'ValidationError') {
        return res.status(err.code).json(err);
      }
      res.status(500).json({code: 500, message: 'Internal server error'});
    });
});



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

const createAuthToken = function(user) {
  return jwt.sign({user}, config.JWT_SECRET, {
    subject: user.username,
    expiresIn: config.JWT_EXPIRY,
    algorithm: 'HS256'
  });
};

const localAuth = passport.authenticate('local', {session: false});
router.use(bodyParser.json());
// The user provides a username and password to login
router.post('/login', localAuth, (req, res) => {
  const authToken = createAuthToken(req.user.serialize());
  console.log(authToken);
  res.json({authToken});
  
});

router.get('/surveys', localAuth, (req, res)  => {
  console.log(req.user);
  res.send(200);

})


module.exports = router;
