'use strict';
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const SurveySchema = require('./survey');


mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {type: String, required: true, default: ''},
    lastName: {type: String, required: true, default: ''},
    email: {type: String, required: true, default: ''},
    surveys: [SurveySchema],
});

UserSchema.methods.serialize = function() {
    return {
        username: this.username || '',
        firstName: this.firstName || '',
        lastName: this.lastName || ''
    };
};

UserSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

UserSchema.statics.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
};

// UserSchema.post('save', function(doc) {
//   console.log('%s has been saved', doc._id);
// });

const User = mongoose.model('User', UserSchema);

module.exports = {User};