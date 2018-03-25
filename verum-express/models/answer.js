'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

const AnswerSchema =  mongoose.Schema({
    answer: {type: Array, required: true},
});


// QuestionSchema.methods.serialize = function() {
//     return {
//         creationdate: this.creationdate|| '',
//         public: this.public|| '',
//         questions: this.questions || '',
        
//     };
// };


module.exports = AnswerSchema;