'use strict';

exports.DATABASE_URL =
    process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://localhost/verum-express';

exports.PORT = process.env.PORT || 3001;


exports.JWT_SECRET = process.env.JWT_SECRET || 'theo';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';