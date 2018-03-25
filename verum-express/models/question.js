'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

const QuestionSchema =  mongoose.Schema({
    questionOrder: {type: Number, required: true},
    

});

// questionType: [MultipleChoiceQuestionSchema] || [ShortAnswerQuestionSchema] || [questionType3]

// QuestionSchema.methods.serialize = function() {
//     return {
//         creationdate: this.creationdate|| '',
//         public: this.public|| '',
//         questions: this.questions || '',
        
//     };
// };


module.exports = QuestionSchema;