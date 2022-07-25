"use strict";

const dotenv = require('dotenv');
dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL
} =  process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

// export the configuration information
module.exports = {
    port: PORT || 8080,
    host: HOST,
    url: HOST_URL,
    SECRET_KEY:"ages-C8PU#YzLDKgU7/P3hs%3mgEctZ2J5Q"
 };