'use strict';
var express = require('express');


var router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const config = require('../../config');

//POST: create new survey: this occurs when the user 
// pushes the button 'create new project' on '/home'
router.post('/', jsonParser, (req, res) => {
  console.log('we are in the create new survey post');
  req.user.surveys.push(req.body);
  req.user.save(function (err) {
    if (err) {console.log(err);
        } 
    else {
          res.send(req.user);
          // res.send(201);
  }
})
}) //end of new category POST

// 


module.exports = router;