"use strict";

const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
dotenvExpand(dotenv.config());

config = {};

config.discord = {
    token: process.env.DISCORD_TOKEN;
};

