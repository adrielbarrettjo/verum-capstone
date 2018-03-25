'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const QuestionSchema = require('./question');
const AnswerSchema = require('./answer');

mongoose.Promise = global.Promise;

const SurveySchema =  mongoose.Schema({
    creationDate: {type: String, required: true},
    public: {type: Boolean, required: true},
    questions: [QuestionSchema],
    answers: [AnswerSchema]
});


SurveySchema.methods.serialize = function() {
    return {
        creationDate: this.creationdate|| '',
        public: this.public|| '',
        questions: this.questions || '',
		answers: this.answers || '',
        
    };
};


module.exports = SurveySchema;



