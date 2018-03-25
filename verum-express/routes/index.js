'use strict';


var express = require('express');

var router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const config = require('../config');




const {User} = require('../models/user');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

module.exports = router;
