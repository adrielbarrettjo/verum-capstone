'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const QuestionSchema = require('./question');

mongoose.Promise = global.Promise;

const SurveySchema =  mongoose.Schema({
    creationDate: {type: String, required: true},
    public: {type: Boolean, required: true},
    questions: [QuestionSchema],
    answers: [AnswerSchema]
});


TransactionSchema.methods.serialize = function() {
    return {
        creationDate: this.creationdate|| '',
        public: this.public|| '',
        questions: this.questions || '',
        
    };
};


module.exports = SurveySchema;



