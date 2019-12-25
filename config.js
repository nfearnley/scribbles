"use strict";

const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
dotenvExpand(dotenv.config());

var config = {};

config.discord = {
    token: process.env.DISCORD_TOKEN
};

config.ownerId = process.env.OWNER_ID;

module.exports = config;

